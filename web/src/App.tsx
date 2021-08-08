import { ThemeProvider } from "@material-ui/core";
import { FC } from "react";
import { GlobalStyles, theme } from "./theme";
import { Router } from "./Router";
import { AuthProvider } from "./context/AuthContext";
import { Notification } from "./shared/Notification";

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Notification />
      <GlobalStyles />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
};
