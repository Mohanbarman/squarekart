import { Response, NextFunction } from "express";
import { userUtils } from "../entities/helpers";
import { userErrors } from "../errors";
import { TRequest } from "../types";

export const Authenticated = async (
  req: TRequest,
  res: Response,
  next: NextFunction
) => {
  const userId = req.session.userID;

  if (!userId) {
    userErrors.unauthenticated(res);
    return -1;
  }

  const user = await userUtils.getById(userId);

  if (!user) {
    req.session.destroy(() => {});
    userErrors.unauthenticated(res);
    return -1;
  }

  req.user = user;
  next();
};
