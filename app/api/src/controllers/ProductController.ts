import { Request, Response } from "express";
import { productUtils } from "../entities/helpers";
import { productErrors } from "../errors";
import { buildResponse } from "../utils/buildResponse";

export const getAllProduct = async (_: Request, res: Response) => {
  const products = await productUtils.getAll();
  res.json(buildResponse({ success: true, data: products }));
};

export const getProductById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id.toString());
  const product = await productUtils.getById(id);

  if (!product) {
    productErrors.notFound(res);
    return -1;
  }

  res.json(buildResponse({ success: true, data: product }));
};
