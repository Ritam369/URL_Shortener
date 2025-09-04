import { Router } from "express";
import { generateShortUrl, redirectToUrl, getUrlStats } from "../controllers/urlController.js";

const urlRouter = Router();

urlRouter.post("/shorten", generateShortUrl);
urlRouter.get("/stats/:shortId", getUrlStats);
urlRouter.get("/:shortId", redirectToUrl);

export default urlRouter;