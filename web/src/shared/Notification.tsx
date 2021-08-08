import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useContext } from "react";
import { FC } from "react";
import { NotificationContext } from "../context/NotificationContext";

export const Notification: FC = (props) => {
  const { isOpen, close, message, severity } = useContext(NotificationContext);

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      autoHideDuration={3000}
      onClose={close}
    >
      <Alert onClose={close} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};
