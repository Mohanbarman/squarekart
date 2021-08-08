import { Router } from "express";
import { OrderController } from "../controllers";
import { Authenticated } from "../middlewares/authenticated";
import { validateBody } from "../validators/validateBody";
import { validateParam } from "../validators/validateParam";

export const orderRouter = Router();

orderRouter.post(
  "/",
  Authenticated,
  validateBody("order/checkout"),
  OrderController.createOrder
);

orderRouter.get("/", Authenticated, OrderController.getMyOrders);
orderRouter.get(
  "/:id",
  Authenticated,
  validateParam("common/int", "id"),
  OrderController.getOrder
);
