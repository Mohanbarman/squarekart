import { Response } from "express";
import { buildResponse } from "../utils/buildResponse";

export const orderErrors = {
  createFailed: (res: Response) => {
    res.status(409).json(
      buildResponse({
        success: false,
        error: {
          code: "CREATE_FAILED",
          message: "Failed to create order",
        },
      })
    );
  },

  fetchFailed: (res: Response) => {
    res.status(500).json(
      buildResponse({
        success: false,
        error: { code: "FETCH_FAILED", message: "Failed to fetch orders" },
      })
    );
  },

  notFound: (res: Response) => {
    res
      .status(404)
      .json(
        buildResponse({
          success: false,
          error: { code: "NOT_FOUND", message: "Order not found" },
        })
      );
  },
};
