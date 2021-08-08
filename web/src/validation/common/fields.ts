import * as yup from "yup";

export const required = yup.string().trim().required("This field is required");

export const int = yup
  .number()
  .typeError("This fields must be a number")
  .required("This field is required");

export const emailField = yup
  .string()
  .trim()
  .email("Email is not valid")
  .required("This field is required");
