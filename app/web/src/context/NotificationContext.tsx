import { useState } from "react";
import { createContext } from "react";

type TSeverity = "error" | "warning" | "info" | "success";

interface IDefaultValue {
  open?: (message: string, severity: TSeverity) => void;
  close?: () => void;
  isOpen?: boolean;
  severity?: TSeverity;
  message?: string;
}

export const NotificationContext = createContext<IDefaultValue>({});

export const NotificationProvider = (props: any) => {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [severity, setSeverity] = useState<TSeverity>("info");

  const open = (message: string, severity: TSeverity) => {
    setSeverity(severity);
    setMessage(message);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setSeverity("info");
    setMessage("");
  };

  return (
    <NotificationContext.Provider
      value={{ isOpen, message, severity, open, close }}
      {...props}
    />
  );
};
