import { Box, Typography } from "@material-ui/core";
import { FC } from "react";
import styled from "styled-components";

import ErrorImg from "../assets/error.svg";

interface IProps {
  message: string;
}

export const ErrorMessage: FC<IProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Img src={ErrorImg} alt="" />
      <Typography variant="h5">{message}</Typography>
    </Box>
  );
};

const Img = styled.img`
  width: 100%;
  margin-bottom: 30px;
  max-width: 300px;
`;
