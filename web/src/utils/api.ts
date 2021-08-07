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
