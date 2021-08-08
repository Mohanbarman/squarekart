import { Box, Button, Typography } from "@material-ui/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import NotFoundImg from "../../assets/404.svg";

export const NotFound: FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Img src={NotFoundImg} alt="" />
      <Typography
        variant="h5"
        style={{ marginBottom: "30px", marginTop: "20px" }}
      >
        Oops! Page not found
      </Typography>
      <Link to="/">
        <Button variant="contained" color="primary">
          go to home
        </Button>
      </Link>
    </Box>
  );
};

const Img = styled.img`
  width: 100%;
  max-width: 500px;
`;
