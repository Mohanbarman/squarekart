import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { IUser } from "../types/user.type";
import { api } from "../utils";
import { NotificationContext } from "./NotificationContext";

type TAuthStatus = "loading" | "authenticated" | "unauthenticated";

interface IDefaultValue {
  user?: IUser;
  logout?: () => void;
  refetchUser?: () => any;
  authStatus?: TAuthStatus;
}

export const AuthContext = createContext<IDefaultValue>({});

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<IUser>();
  const [authStatus, setAuthStatus] = useState<TAuthStatus>("loading");
  const { open: showNotification } = useContext(NotificationContext);
  const history = useHistory();

  const logout = async () => {
    const { error } = await api.logout();
    if (error) return;
    setUser(undefined);
    setAuthStatus("unauthenticated");
    showNotification?.("Logged out successfully", "warning");
    history.push("/");
  };

  const getUser = async () => {
    setAuthStatus("loading");

    const { data } = await api.getMe();

    if (data) {
      setAuthStatus("authenticated");
      setUser(data);
      return -1;
    }

    setAuthStatus("unauthenticated");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, logout, authStatus, refetchUser: getUser }}
      {...props}
    />
  );
};
