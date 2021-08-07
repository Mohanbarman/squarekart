import { Request, Response } from "express";
import { userUtils } from "../entities/helpers";
import { userErrors } from "../errors";
import { TRequest } from "../types";
import { validateHash } from "../utils/bcryptHelper";
import { buildResponse } from "../utils/buildResponse";

export const signUp = async (req: TRequest, res: Response): Promise<number> => {
  const firstName: string = req.body.firstName.toString();
  const lastName: string = req.body.lastName?.toString() || "";
  const email: string = req.body.email.toString();
  const password: string = req.body.password.toString();

  /**
   * Checking if email exists
   */
  if (await userUtils.isEmailExists(email)) {
    userErrors.emailExists(res);
    return -1;
  }

  /**
   * Inserting a new user in database
   */
  const user = await userUtils.add({
    email,
    firstName,
    lastName,
    password,
  });

  delete user.password; // removing password field from user object

  req.session.userID = user.id; // authenticating user

  res.json(buildResponse({ success: true, data: user }));
};

export const signIn = async (req: TRequest, res: Response) => {
  const email: string = req.body.email.toString();
  const password: string = req.body.password.toString();

  const user = await userUtils.getByEmail(email);

  // user not found
  if (!user) {
    userErrors.authFailed(res);
    return -1;
  }

  const isPassMatched = await validateHash(password, user.password);

  if (!isPassMatched) {
    userErrors.authFailed(res);
    return -1;
  }

  delete user.password;

  req.session.userID = user.id; // authenticating user

  res.json(buildResponse({ success: true, data: user }));
};

/**
 * Get the current logged in user
 */
export const getMe = async (req: TRequest, res: Response) => {
  const user = req.user;

  if (!user) {
    userErrors.sessionExpired(res);
    return -1;
  }

  delete user.password;

  res.json(buildResponse({ success: true, data: user }));
};
