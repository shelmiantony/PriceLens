import dotenv from "dotenv";
import mongoose from "mongoose";

import Product from "./models/Product";
import Store from "./models/Store";
import Listing from "./models/Listing";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB connected");

    // Clear existing sample data
    await Listing.deleteMany({});
    await Product.deleteMany({});
    await Store.deleteMany({});

    // Create stores
    const stores = await Store.insertMany([
      {
        name: "Nykaa",
        websiteUrl: "https://www.nykaa.com",
      },
      {
        name: "Purplle",
        websiteUrl: "https://www.purplle.com",
      },
      {
        name: "Amazon",
        websiteUrl: "https://www.amazon.in",
      },
      {
        name: "Myntra",
        websiteUrl: "https://www.myntra.com",
      },
    ]);

    // Create products
    const products = await Product.insertMany([
      {
        name: "Twist-Up Kohl Pencil",
        brand: "Auralé",
        category: "Eyeliner",
        description: "Smooth kohl pencil for everyday use",
        imageUrl: "",
        variant: "Black",
        size: "1.2g",
      },
      {
        name: "Smudge-Proof Kajal Liner",
        brand: "Auralé",
        category: "Eyeliner",
        description: "Long-lasting, smudge-proof kajal liner",
        imageUrl: "",
        variant: "Black",
        size: "0.35g",
      },
      {
        name: "Waterproof Pencil Liner",
        brand: "Bold Muse",
        category: "Eyeliner",
        description: "Waterproof pencil eyeliner",
        imageUrl: "",
        variant: "Black",
        size: "1g",
      },
    ]);

    // Create product listings
    const listings = [
      // Product 1
      {
        product: products[0]._id,
        store: stores[0]._id,
        price: 12900,
        productUrl: "https://www.nykaa.com",
        inStock: true,
      },
      {
        product: products[0]._id,
        store: stores[1]._id,
        price: 12500,
        productUrl: "https://www.purplle.com",
        inStock: true,
      },
      {
        product: products[0]._id,
        store: stores[2]._id,
        price: 13900,
        productUrl: "https://www.amazon.in",
        inStock: true,
      },
      {
        product: products[0]._id,
        store: stores[3]._id,
        price: 14900,
        productUrl: "https://www.myntra.com",
        inStock: false,
      },

      // Product 2
      {
        product: products[1]._id,
        store: stores[0]._id,
        price: 16900,
        productUrl: "https://www.nykaa.com",
        inStock: true,
      },
      {
        product: products[1]._id,
        store: stores[1]._id,
        price: 14900,
        productUrl: "https://www.purplle.com",
        inStock: true,
      },
      {
        product: products[1]._id,
        store: stores[2]._id,
        price: 17500,
        productUrl: "https://www.amazon.in",
        inStock: true,
      },
      {
        product: products[1]._id,
        store: stores[3]._id,
        price: 19900,
        productUrl: "https://www.myntra.com",
        inStock: false,
      },

      // Product 3
      {
        product: products[2]._id,
        store: stores[0]._id,
        price: 17900,
        productUrl: "https://www.nykaa.com",
        inStock: true,
      },
      {
        product: products[2]._id,
        store: stores[2]._id,
        price: 18900,
        productUrl: "https://www.amazon.in",
        inStock: true,
      },
    ];

    await Listing.insertMany(listings);

    console.log("Sample data inserted successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
};

seedData();
