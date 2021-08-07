import { ThemeProvider } from "@material-ui/core";
import { FC } from "react";
import { GlobalStyles, theme } from "./theme";
import { Router } from "./Router";
import { AuthProvider } from "./context/AuthContext";

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
};
