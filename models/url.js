import { model, Schema } from "mongoose";

const urlSchema = new Schema({
  originalUrl: { type: String, required: true },
  shortID: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export default model("Url", urlSchema);
