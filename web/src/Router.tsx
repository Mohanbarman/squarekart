import { useContext } from "react";
import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Checkout,
  NotFound,
  Order,
  Orders,
  Product,
  Products,
  SignIn,
  SignUp,
} from "./app";
import { AuthContext } from "./context/AuthContext";
import { LoadingIndicator, Navbar } from "./shared";

export const Router: FC = () => {
  const { authStatus } = useContext(AuthContext);

  if (authStatus === "loading") return <LoadingIndicator />;

  return (
    <Switch>
      <Route path="/" exact>
        <Navbar>
          <Products />
        </Navbar>
      </Route>
      {authStatus === "unauthenticated" && (
        <Route path="/signIn" exact>
          <Navbar>
            <SignIn />
          </Navbar>
        </Route>
      )}
      {authStatus === "unauthenticated" && (
        <Route path="/signUp" exact>
          <Navbar>
            <SignUp />
          </Navbar>
        </Route>
      )}
      <Route path="/products/:id" exact>
        <Navbar>
          <Product />
        </Navbar>
      </Route>
      {authStatus === "authenticated" && (
        <Route path="/checkout/:id" exact>
          <Navbar>
            <Checkout />
          </Navbar>
        </Route>
      )}
      {authStatus === "authenticated" && (
        <Route path="/orders" exact>
          <Navbar>
            <Orders />
          </Navbar>
        </Route>
      )}

      {authStatus === "authenticated" && (
        <Route path="/orders/:id" exact>
          <Navbar>
            <Order />
          </Navbar>
        </Route>
      )}

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
