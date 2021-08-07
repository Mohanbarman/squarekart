import { FC } from "react";
import { Logo } from "../Logo";
import { Container } from "./styled";

export const Navbar: FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};
