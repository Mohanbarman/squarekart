import { Box, TextField, Typography } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { ErrorMessage, LoadingIndicator } from "../../shared";
import { Price } from "../../shared/Price";
import { IOrder } from "../../types";
import { api } from "../../utils";

export const Order: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [order, setOrder] = useState<IOrder>();

  const fetchOrder = async () => {
    setLoading(true);

    const { data, error } = await api.getOrder(parseInt(id));

    if (error?.code === "NOT_FOUND") setError("Product not found");
    if (data) setOrder(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LoadingIndicator />;
  if (error || !order) return <ErrorMessage message={error} />;

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          maxWidth="600px"
          gridGap="20px"
        >
          <TextField value={order.fullName} disabled label="Full Name" />
          <TextField value={order.mobile} disabled label="Mobile" />
          <TextField
            value={order.shippingAddress}
            disabled
            label="Flat, House no., Building, Company, Apartment"
          />
          <TextField value={order.city} disabled label="City" />
          <TextField value={order.state} disabled label="State" />
        </Box>
        <Box
          display="flex"
          padding="20px"
          flexDirection="column"
          width="100%"
          maxWidth="400px"
        >
          <Typography
            variant="body1"
            color="textSecondary"
            style={{
              marginBottom: "30px",
            }}
          >
            Price details
          </Typography>
          <Box display="flex" flexDirection="column" gridGap="10px">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography variant="body1">Price 1 item</Typography>
              <Price
                price={order.product.price}
                currency={order.product.currency}
                variant="body1"
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography variant="h6">Total Price</Typography>
              <Price
                price={order.product.price}
                currency={order.product.currency}
                variant="h5"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
  }
`;
