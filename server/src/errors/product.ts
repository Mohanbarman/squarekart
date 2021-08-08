import { Response } from "express";
import { buildResponse } from "../utils/buildResponse";

export const productErrors = {
  notFound: (res: Response) => {
    res
      .status(404)
      .json(
        buildResponse({
          success: false,
          error: {
            code: "NOT_FOUND",
            message: "Product not found with this id",
          },
        })
      );
  },
};
