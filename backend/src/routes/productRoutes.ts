import { Router } from "express";
import { searchProducts } from "../controllers/productController";

const router = Router();

router.get("/search", searchProducts);

export default router;
