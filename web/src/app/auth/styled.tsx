import styled from "styled-components";

export const RootContainer = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormRootContainer = styled.div`
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
`;

export const FormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
