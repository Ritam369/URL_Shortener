import { nanoid } from "nanoid";
import url from "../models/url.js";

export async function generateShortUrl(req, res) {
    try {
        const { originalUrl } = req.body;
        if (!originalUrl) {
            return res.status(400).send({ message: "Original long URL is required" });
        }
        const shortID = nanoid(10);
        const dataToSave = new url({ originalUrl, shortID });
        await dataToSave.save();
        res.status(201).send({ shortUrl: `${req.protocol}://${req.get("host")}/${shortID}` });
    } catch (error) {
        console.error("Error generating short URL:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}