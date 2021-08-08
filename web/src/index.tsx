import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { NotificationProvider } from "./context/NotificationContext";

render(
  <NotificationProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NotificationProvider>,
  document.getElementById("root")
);
