import { nanoid } from "nanoid";
import QRCode from "qrcode";
import url from "../models/url.js";
import validateUrl from "../services/urlValidation.js";

export async function generateShortUrl(req, res) {
    try {
        const { originalUrl, customAlias } = req.body;
        
        if (!originalUrl) {
            return res.status(400).json({ message: "Original long URL is required" });
        }
        
        if (!validateUrl(originalUrl)) {
            return res.status(400).json({ message: "Invalid URL format" });
        }

        let shortID;
        let isCustom = false;

        if (customAlias) {
            if (!/^[a-zA-Z0-9_-]+$/.test(customAlias)) {
                return res.status(400).json({ 
                    message: "Custom alias can only contain letters, numbers, hyphens, and underscores" 
                });
            }

            const existingUrl = await url.findOne({ shortID: customAlias });
            if (existingUrl) {
                return res.status(409).json({ message: "Custom alias already exists. Please choose another one." });
            }

            shortID = customAlias;
            isCustom = true;
        } else {
            shortID = nanoid(8);
        }

        const existingOriginalUrl = await url.findOne({ originalUrl });
        if (existingOriginalUrl) {
            const shortUrl = `${req.protocol}://${req.get("host")}/${existingOriginalUrl.shortID}`;
            const qrCodeDataUrl = await QRCode.toDataURL(shortUrl);
            
            return res.status(200).json({ 
                message: "URL already shortened",
                shortUrl,
                qrCode: qrCodeDataUrl,
                originalUrl: existingOriginalUrl.originalUrl,
                shortID: existingOriginalUrl.shortID,
                createdAt: existingOriginalUrl.createdAt,
                clickCount: existingOriginalUrl.clickCount
            });
        }

        const dataToSave = new url({ 
            originalUrl, 
            shortID, 
            customAlias: isCustom ? customAlias : null,
            isCustom 
        });
        
        await dataToSave.save();

        const shortUrl = `${req.protocol}://${req.get("host")}/${shortID}`;
        const qrCodeDataUrl = await QRCode.toDataURL(shortUrl);

        res.status(201).json({ 
            message: "Short URL created successfully",
            shortUrl,
            qrCode: qrCodeDataUrl,
            originalUrl: dataToSave.originalUrl,
            shortID: dataToSave.shortID,
            isCustom: dataToSave.isCustom,
            createdAt: dataToSave.createdAt,
            clickCount: dataToSave.clickCount
        });
    } catch (error) {
        console.error("Error generating short URL:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function redirectToUrl(req, res) {
    try {
        const { shortId } = req.params;
        const urlEntry = await url.findOne({ shortID: shortId });
        
        if (!urlEntry) {
            return res.status(404).json({ message: "URL not found" });
        }

        urlEntry.clickCount += 1;
        await urlEntry.save();

        res.redirect(urlEntry.originalUrl);
    } catch (error) {
        console.error("Error redirecting to URL:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getUrlStats(req, res) {
    try {
        const { shortId } = req.params;
        const urlEntry = await url.findOne({ shortID: shortId });
        
        if (!urlEntry) {
            return res.status(404).json({ message: "URL not found" });
        }

        res.status(200).json({
            originalUrl: urlEntry.originalUrl,
            shortID: urlEntry.shortID,
            isCustom: urlEntry.isCustom,
            clickCount: urlEntry.clickCount,
            createdAt: urlEntry.createdAt
        });
    } catch (error) {
        console.error("Error fetching URL stats:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}