import * as yup from "yup";
import { required, emailField } from "./common/fields";

/**
 * Validation schema for signUp data
 */
export const signUpSchema = yup.object().shape({
  firstName: required,
  email: emailField,
  password: yup
    .string()
    .trim()
    .min(8, "Password must be greater than 8 characters")
    .max(20, "Password Must be smaller than 20 characters")
    .required("This field is required"),
});

/**
 * Validation schema for login
 */
export const signInSchema = yup.object().shape({
  email: emailField,
  password: required,
});
