import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import urlRouter from "./routes/urlRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true
}));
app.use(express.json());

app.use("/api", urlRouter);

app.get("/", (req, res) => {
  res.json({ 
    message: "URL Shortener Backend API is running!",
    version: "1.0.0",
    endpoints: {
      "POST /api/shorten": "Create short URL",
      "GET /api/stats/:shortId": "Get URL stats",
      "GET /:shortId": "Redirect to original URL"
    }
  });
});

app.get("/:shortId", async (req, res) => {
  try {
    const { redirectToUrl } = await import("./controllers/urlController.js");
    redirectToUrl(req, res);
  } catch (error) {
    console.error("Error in redirect:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});