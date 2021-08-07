import { Box, Button, TextField, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Navbar } from "../../shared";
import {
  FormInputsContainer,
  FormRootContainer,
  RootContainer,
} from "./styled";
import { signInSchema } from "../../validation";
import { useHistory } from "react-router-dom";
import { api } from "../../utils";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

interface IFormFields {
  email: string;
  password: string;
}

export const SignIn: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormFields>({ resolver: yupResolver(signInSchema) });

  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { refetchUser } = useContext(AuthContext);

  const onSubmit: SubmitHandler<IFormFields> = async ({ email, password }) => {
    setLoading(true);

    const { error } = await api.signIn(email, password);

    refetchUser?.();
    if (!error) history.push("/");

    if (error?.code === "AUTH_FAILED") {
      setError("email", { type: "manual", message: error.message });
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <RootContainer>
        <FormRootContainer>
          <Typography
            style={{ marginBottom: "50px", textAlign: "center" }}
            variant="h5"
          >
            Sign In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInputsContainer>
              <TextField
                variant="outlined"
                color="primary"
                label="Email"
                placeholder="username@domain.com"
                name="email"
                helperText={errors.email?.message || ""}
                error={!!errors.email}
                inputProps={register("email")}
              />
              <TextField
                variant="outlined"
                color="primary"
                label="Password"
                type="password"
                placeholder="************"
                helperText={errors.password?.message}
                error={!!errors.password}
                name="password"
                inputProps={register("password")}
              />
              <Button
                disabled={loading}
                type="submit"
                color="primary"
                variant="contained"
              >
                {loading ? "Please wait..." : "Sign In"}
              </Button>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginLeft="10px"
              >
                <Typography variant="caption" color="textSecondary">
                  Don't have an account ?
                </Typography>
                <Button onClick={() => history.push("/signUp")} size="small">
                  <Typography variant="caption" color="primary">
                    Sign Up
                  </Typography>
                </Button>
              </Box>
            </FormInputsContainer>
          </form>
        </FormRootContainer>
      </RootContainer>
    </>
  );
};
