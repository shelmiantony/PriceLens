import { Request, Response } from "express";
import Product from "../models/Product";
import Listing from "../models/Listing";
import Store from "../models/Store";

const escapeRegex = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const searchProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const searchTerm = String(req.query.q || "").trim();
    const storeName = String(req.query.store || "").trim();
    const brandName = String(req.query.brand || "").trim();
    const inStockOnly = req.query.inStock === "true";
    const sort = String(req.query.sort || "price_asc");
    const priceRange = String(req.query.priceRange || "").trim();

    if (!searchTerm) {
      res.status(400).json({
        message: "Please provide a search term using ?q=",
      });
      return;
    }

    const searchRegex = new RegExp(escapeRegex(searchTerm), "i");

    // Search products by name, brand, or category
    const productFilter: Record<string, unknown> = {
      $or: [
        { name: searchRegex },
        { brand: searchRegex },
        { category: searchRegex },
      ],
    };

    if (brandName) {
      productFilter.brand = new RegExp(escapeRegex(brandName), "i");
    }

    const products = await Product.find(productFilter).lean();

    // Find matching store, if a store filter is provided
    let selectedStoreId: unknown = undefined;

    if (storeName) {
      const selectedStore = await Store.findOne({
        name: new RegExp(`^${escapeRegex(storeName)}$`, "i"),
      }).lean();

      if (!selectedStore) {
        res.status(200).json({
          query: searchTerm,
          count: 0,
          products: [],
        });
        return;
      }

      selectedStoreId = selectedStore._id;
    }

    const results = await Promise.all(
      products.map(async (product) => {
        const listingFilter: Record<string, unknown> = {
          product: product._id,
        };

        if (selectedStoreId) {
          listingFilter.store = selectedStoreId;
        }

        if (inStockOnly) {
          listingFilter.inStock = true;
        }

        // Price filters use paise
        if (priceRange === "under150") {
          listingFilter.price = { $lt: 15000 };
        } else if (priceRange === "150to250") {
          listingFilter.price = { $gte: 15000, $lte: 25000 };
        } else if (priceRange === "above250") {
          listingFilter.price = { $gt: 25000 };
        }

        const listings = await Listing.find(listingFilter)
          .populate("store", "name websiteUrl logoUrl")
          .sort({ price: 1 })
          .lean();

        if (listings.length === 0) {
          return null;
        }

        const lowestPricePaise = listings[0].price;

        return {
          productId: product._id,
          name: product.name,
          brand: product.brand,
          category: product.category,
          description: product.description,
          imageUrl: product.imageUrl,
          variant: product.variant,
          size: product.size,
          lowestPrice: lowestPricePaise / 100,
          storeCount: listings.length,
          stores: listings
            .map((listing: any) => listing.store?.name)
            .filter(Boolean),
          listings: listings.map((listing: any) => ({
            storeId: listing.store?._id,
            storeName: listing.store?.name,
            storeWebsite: listing.store?.websiteUrl,
            price: listing.price / 100,
            pricePaise: listing.price,
            productUrl: listing.productUrl,
            inStock: listing.inStock,
            lastUpdated: listing.lastUpdated,
          })),
        };
      }),
    );

    const filteredResults = results.filter((product) => product !== null);

    // Sort products by their lowest matching listing price
    filteredResults.sort((a, b) => {
      if (sort === "price_desc") {
        return b.lowestPrice - a.lowestPrice;
      }

      return a.lowestPrice - b.lowestPrice;
    });

    res.status(200).json({
      query: searchTerm,
      count: filteredResults.length,
      products: filteredResults,
    });
  } catch (error) {
    console.error("Product search error:", error);

    res.status(500).json({
      message: "Failed to search products",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
