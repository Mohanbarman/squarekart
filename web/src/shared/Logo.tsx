import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FC } from "react";
import styled from "styled-components";

export const Logo: FC = () => {
  return (
    <LinkStyled to="/">
      <Text variant="h6">SQUARE-KART</Text>
    </LinkStyled>
  );
};

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const Text = styled(Typography)`
  color: white;
  text-decoration: none;
`;
