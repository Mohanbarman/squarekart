import { Router } from "express";

import { ProductController } from "../controllers";
import { validateParam } from "../validators/validateParam";

export const productRouter = Router();

productRouter.get("/", ProductController.getAllProduct);
productRouter.get(
  "/:id",
  validateParam("common/int", "id"),
  ProductController.getProductById
);
