import { Router } from "express";

import { UserController } from "../controllers";
import { getUserMiddleware } from "../middlewares";
import { validateBody } from "../validators/validateBody";

export const userRouter = Router();

/**
 * User signup
 * @method POST
 * @route /user
 * @body request body schema
 *  - [firstName] string required
 *  - [lastName] string
 *  - [email] string required unique
 *  - [password] string required min(8) max(20)
 */
userRouter.post("/", validateBody("user/signUp"), UserController.signUp);

/**
 * User signin
 * @method POST
 * @route /user/signIn
 * @body request body schema
 *  - [email] string required
 *  - [password] string required
 */
userRouter.post("/signIn", validateBody("user/signIn"), UserController.signIn);

userRouter.get("/me", getUserMiddleware, UserController.getMe);
