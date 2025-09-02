import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import urlRouter from "./routes/urlRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use("/api/url", urlRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});