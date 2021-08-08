import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 50px;
`;

export const ProductSection1 = styled.div`
  display: flex;
  gap: 50px;
  align-items: flex-start;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  max-width: 300px;
  width: 100%;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 500px) {
    align-items: stretch;
  }
`;
