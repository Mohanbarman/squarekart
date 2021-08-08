import { IProduct } from ".";

export interface IOrder {
  id: number;
  createdAt: string;
  updatedAt: string;
  pricePerItem: number;
  currency: string;
  qty: number;
  fullName: string;
  mobile: string;
  shippingAddress: string;
  city: string;
  state: string;
  userId: number;
  productId: number;
  product: IProduct;
}
