import { CircularProgress } from "@material-ui/core";
import { FC } from "react";
import styled from "styled-components";

export const LoadingIndicator: FC = () => {
  return <LoadingPositioned color="primary" />;
};

const LoadingPositioned = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;
