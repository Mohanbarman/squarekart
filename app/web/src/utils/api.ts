import axios from "axios";

const Api = axios.create({
  baseURL: process.env["REACT_APP_BASE_URL"],
  withCredentials: true,
});

export const signIn = async (email: string, password: string) => {
  try {
    const res = await Api.post("/user/signIn", { email, password });
    return { data: res.data.data, error: null };
  } catch (e) {
    return { data: null, error: e?.response?.data?.error || e?.message };
  }
};

interface IRegisterBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signUp = async (body: IRegisterBody) => {
  try {
    const res = await Api.post("/user/signUp", body);
    return { data: res.data.data, error: null };
  } catch (e) {
    return { data: null, error: e?.response?.data?.error || e?.message };
  }
};

export const getMe = async () => {
  try {
    const res = await Api.get("/user/me");
    return { data: res.data.data, error: null };
  } catch (e) {
    return { data: null, error: e?.response?.data?.error || e?.message };
  }
};

export const logout = async () => {
  try {
    const res = await Api.get("/user/logout");
    return { data: res.data.data, error: null };
  } catch (e) {
    return { data: null, error: e?.response?.data?.error || e?.message };
  }
};

export const getAllProducts = async () => {
  try {
    const res = await Api.get("/products");
    return { data: res.data.data, error: null };
  } catch (e) {
    return { data: null, error: e?.message };
  }
};

export const getProductById = async (id: number) => {
  try {
    const res = await Api.get(`/products/${id}`);
    return { data: res.data.data, error: null };
  } catch (e) {
    return { data: null, error: e?.response?.data?.error || e?.message };
  }
};

interface ICreateOrderBody {
  currency: string;
  qty: number;
  fullName: string;
  mobile: number;
  shippingAddress: string;
  city: string;
  state: string;
  productId: string;
}

export const createOrder = async (body: ICreateOrderBody) => {
  try {
    const res = await Api.post("/orders", body);
    return { data: res.data.data, error: null };
  } catch (e) {
    return { data: null, error: e?.response?.data?.error || e?.message };
  }
};

export const getMyOrders = async () => {
  try {
    const res = await Api.get("/orders");
    return { data: res.data.data, error: null };
  } catch (e) {
    return { data: null, error: e?.response?.data?.error || e?.message };
  }
};

export const getOrder = async (id: number) => {
  try {
    const res = await Api.get(`/orders/${id}`);
    return { data: res.data.data, error: null };
  } catch (e) {
    return { data: null, error: e?.response?.data?.error || e?.message };
  }
};
