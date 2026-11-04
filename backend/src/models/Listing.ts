import { Schema, model, type Document, Types } from "mongoose";
export interface IListing extends Document {
  product: Types.ObjectId;
  store: Types.ObjectId;
  price: number;
  productUrl: string;
  inStock: boolean;
  lastUpdated: Date;
}
const listingSchema = new Schema<IListing>(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
      index: true,
    },
    store: {
      type: Schema.Types.ObjectId,
      ref: "Store",
      required: true,
    },
    price: { type: Number, required: true, min: 0 },
    productUrl: { type: String, required: true },
    inStock: {
      type: Boolean,
      default: true,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);
listingSchema.index({ product: 1, store: 1 }, { unique: true });
const Listing = model<IListing>("Listing", listingSchema);
export default Listing;
