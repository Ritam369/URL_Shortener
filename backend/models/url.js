import { model, Schema } from "mongoose";

const urlSchema = new Schema({
  originalUrl: { type: String, required: true },
  shortID: { type: String, unique: true, required: true },
  customAlias: { type: String, default: null },
  isCustom: { type: Boolean, default: false },
  clickCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default model("Url", urlSchema);
