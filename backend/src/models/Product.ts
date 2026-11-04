import { Schema, model, type Document } from "mongoose";
export interface IProduct extends Document {
  name: string;
  brand: string;
  category: string;
  description?: string;
  ImageUrl?: string;
  variant?: string;
  size?: string;
}
const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true, index: true },
    description: { type: String, default: "" },
    ImageUrl: { type: String, default: "" },
    variant: { type: String, default: "" },
    size: { type: String, default: "" },
  },
  { timestamps: true },
);
productSchema.index({ name: "text", brand: "text" });
const Product = model<IProduct>("Product", productSchema);
export default Product;
