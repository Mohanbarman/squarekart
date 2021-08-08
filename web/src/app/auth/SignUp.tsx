import { Box, Button, TextField, Typography } from "@material-ui/core";
import { FC, useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Navbar } from "../../shared";
import {
  FormInputsContainer,
  FormRootContainer,
  RootContainer,
} from "./styled";
import { signUpSchema } from "../../validation";
import { useHistory } from "react-router-dom";
import { api } from "../../utils";
import { AuthContext } from "../../context/AuthContext";

interface IFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormFields>({ resolver: yupResolver(signUpSchema) });

  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { refetchUser, user } = useContext(AuthContext);
  if (user) history.push("/");

  const onSubmit: SubmitHandler<IFormFields> = async (values) => {
    setLoading(true);

    const { error } = await api.signUp(values);

    refetchUser?.();
    if (!error) history.push("/");

    if (error?.code === "EMAIL_EXISTS") {
      setError("email", { type: "manual", message: error.message });
    }

    setLoading(false);
  };

  return (
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
              label="First Name"
              placeholder="John"
              helperText={errors.firstName?.message || ""}
              error={!!errors.firstName}
              inputProps={register("firstName")}
            />
            <TextField
              variant="outlined"
              color="primary"
              label="Last Name"
              placeholder="Doe"
              helperText={errors.lastName?.message || ""}
              error={!!errors.lastName}
              inputProps={register("lastName")}
            />
            <TextField
              variant="outlined"
              color="primary"
              label="Email"
              placeholder="username@domain.com"
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
              inputProps={register("password")}
            />
            <Button
              disabled={loading}
              type="submit"
              color="primary"
              variant="contained"
            >
              {loading ? "Please wait..." : "Sign Up"}
            </Button>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginLeft="10px"
            >
              <Typography variant="caption" color="textSecondary">
                Already have an account ?
              </Typography>
              <Button onClick={() => history.push("/signIn")} size="small">
                <Typography variant="caption" color="primary">
                  Sign In
                </Typography>
              </Button>
            </Box>
          </FormInputsContainer>
        </form>
      </FormRootContainer>
    </RootContainer>
  );
};
