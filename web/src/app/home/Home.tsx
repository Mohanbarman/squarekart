import { useContext } from "react";
import { FC } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Home: FC = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <h1>Loading..</h1>;
  if (user) return <pre>{JSON.stringify(user, null, 2)}</pre>;

  return <div></div>;
};
