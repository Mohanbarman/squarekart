import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, SignIn, SignUp } from "./app";

export const Router: FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/signIn" exact>
        <SignIn />
      </Route>
      <Route path="/signUp">
        <SignUp />
      </Route>
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  );
};
