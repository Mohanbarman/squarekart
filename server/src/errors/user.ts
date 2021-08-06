import { Response } from "express";
import { buildResponse } from "../utils/buildResponse";

export const userErrors = {
  emailExists: (res: Response) => {
    res.status(409).json(
      buildResponse({
        success: false,
        error: {
          code: "EMAIL_EXISTS",
          message: "Email address already exists",
        },
      })
    );
  },

  authFailed: (res: Response) => {
    res.status(403).json(
      buildResponse({
        success: false,
        error: {
          code: "AUTH_FAILED",
          message: "Username or Password incorrect",
        },
      })
    );
  },

  sessionExpired: (res: Response) => {
    res.status(401).json(
      buildResponse({
        success: false,
        error: {
          code: "SESSION_EXPIRED",
          message: "Session is expired please relogin",
        },
      })
    );
  },
};
