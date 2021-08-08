import { Response, NextFunction } from "express";
import { userUtils } from "../entities/helpers";
import { TRequest } from "../types";

export const getUserMiddleware = async (
  req: TRequest,
  res: Response,
  next: NextFunction
) => {
  const userId = req.session.userID;
  const user = await userUtils.getById(userId);
  req.user = user;
  next();
};
