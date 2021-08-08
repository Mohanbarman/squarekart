import { Request, Response } from "express";
import { orderUtils, productUtils } from "../entities/helpers";
import { productErrors, userErrors } from "../errors";
import { orderErrors } from "../errors/order";
import { TRequest } from "../types";
import { buildResponse } from "../utils/buildResponse";

export const createOrder = async (req: TRequest, res: Response) => {
  const productId = req.body.productId;

  const product = await productUtils.getById(productId);

  if (!product) {
    productErrors.notFound(res);
    return -1;
  }

  try {
    const order = await orderUtils.add({
      ...req.body,
      pricePerItem: product.price,
      userId: req.user.id,
    });
    res.json(buildResponse({ success: true, data: order }));
  } catch (e) {
    orderErrors.createFailed(res);
  }
};

export const getMyOrders = async (req: TRequest, res: Response) => {
  const user = req.user;

  try {
    const userOrders = await orderUtils.getAllByUserId(user.id);
    res.json(buildResponse({ success: true, data: userOrders }));
  } catch (e) {
    orderErrors.fetchFailed(res);
    return -1;
  }
};

export const getOrder = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id.toString());
  try {
    const order = await orderUtils.getById(id);
    if (!order) {
      orderErrors.notFound(res);
      return -1;
    }
    res.json(buildResponse({ success: true, data: order }));
  } catch (e) {
    orderErrors.fetchFailed(res);
  }
};
