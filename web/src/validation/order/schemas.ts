import * as yup from "yup";
import { int, required } from "../common/fields";

export const checkoutSchema = yup.object().shape({
  fullName: required,
  mobile: int
    .max(999999999999, "Phone number must not be greater than 12 digits")
    .min(100000000, "Phone number must not be smaller than 8 digits"),
  shippingAddress: required,
  city: required,
  state: required,
});
