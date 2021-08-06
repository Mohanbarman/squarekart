import * as yup from "yup";

export const required = yup.string().trim().required("This field is required");
