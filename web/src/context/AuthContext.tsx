import { useEffect } from "react";
import { createContext, useState } from "react";
import { IUser } from "../types/user.type";
import { api } from "../utils";

interface IDefaultValue {
  user?: IUser;
  logout?: () => void;
  loading?: boolean;
  refetchUser?: () => any;
}

export const AuthContext = createContext<IDefaultValue>({});

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);

  const logout = async () => {};

  const getUser = async () => {
    setLoading(true);

    const { data } = await api.getMe();
    if (data) setUser(data);

    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, logout, loading, refetchUser: getUser }}
      {...props}
    />
  );
};
