import { Typography } from "@material-ui/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Price } from "../../shared/Price";
import { IOrder } from "../../types";

interface IProps {
  order: IOrder;
}

export const OrderItem: FC<IProps> = (props) => {
  const { id, product, currency, pricePerItem, qty } = props.order;

  return (
    <Link to={`/orders/${id}`}>
      <Container>
        <Image src={product.photoUrl} />
        <ContentSection>
          <Title variant="h6">{product.title}</Title>
          <Price {...{ currency, price: pricePerItem * qty, variant: "h5" }} />
        </ContentSection>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 30px;
  cursor: pointer;
  align-items: flex-start;
  border-radius: 10px;

  &:hover {
    background-color: #0000001c;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  max-width: 150px;
`;

const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 400;
  margin-bottom: 10px;
`;
