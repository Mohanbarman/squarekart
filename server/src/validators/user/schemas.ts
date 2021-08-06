import * as yup from "yup";
import { required } from "../common/fields";

const emailField = yup
  .string()
  .trim()
  .email("Email is not valid")
  .required("This field is required");

/**
 * Validation schema for signUp data
 */
export const signUp = yup.object().shape({
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
export const signIn = yup.object().shape({
  email: emailField,
  password: required,
});
