import { NextFunction, Request, Response } from "express";
import { CORS_ORIGIN } from "../config/env";

export const cors = (_: Request, res: Response, next: NextFunction) => {
  res.append("Access-Control-Allow-Origin", CORS_ORIGIN);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  res.append("Access-Control-Allow-Credentials", "true");
  next();
};
