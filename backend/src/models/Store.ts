import { Schema, model, type Document } from "mongoose";

export interface IStore extends Document {
  name: string;
  websiteUrl: string;
  logoUrl: string;
  isActive: boolean;
}
const storeSchema = new Schema<IStore>({
  name: { type: String, unique: true, trim: true, required: true },
  websiteUrl: { type: String, required: true },
  logoUrl: { type: String, default: "" },
  isActive: { type: Boolean, default: true },
});
const Store = model<IStore>("Store", storeSchema);
export default Store;
