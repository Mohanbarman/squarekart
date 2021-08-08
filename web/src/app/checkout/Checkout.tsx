import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { FC, useContext, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { NotificationContext } from "../../context/NotificationContext";

import { ErrorMessage, LoadingIndicator } from "../../shared";
import { Price } from "../../shared/Price";
import { IProduct } from "../../types";
import { api } from "../../utils";
import { checkoutSchema } from "../../validation/order/schemas";

interface IFormFields {
  pricePerItem: number;
  currency: string;
  qty: number;
  fullName: string;
  mobile: number;
  shippingAddress: string;
  city: string;
  state: string;
}

export const Checkout: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { open: showNotification } = useContext(NotificationContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>({
    resolver: yupResolver(checkoutSchema),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [product, setProduct] = useState<IProduct>();

  const fetchProduct = async () => {
    setLoading(true);

    const { data, error } = await api.getProductById(parseInt(id));

    if (error?.code === "NOT_FOUND") setError("Product not found");
    if (data) setProduct(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LoadingIndicator />;
  if (error || !product) return <ErrorMessage message={error} />;

  const onSubmit: SubmitHandler<IFormFields> = async (formFields) => {
    setLoading(true);

    const { data, error } = await api.createOrder({
      ...formFields,
      productId: id,
      currency: "INR",
      qty: 1,
    });

    console.log(data, error);

    if (error) showNotification?.(error?.message || error, "error");
    if (data) {
      showNotification?.("Order placed successfully", "success");
      history.push("/orders");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Container>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            maxWidth="600px"
            gridGap="20px"
          >
            <TextField
              helperText={errors.fullName?.message}
              error={!!errors.fullName}
              label="Full Name"
              inputProps={register("fullName")}
            />
            <TextField
              helperText={errors.mobile?.message}
              error={!!errors.mobile}
              label="Mobile"
              inputProps={register("mobile")}
            />
            <TextField
              inputProps={register("shippingAddress")}
              helperText={errors.shippingAddress?.message}
              error={!!errors.shippingAddress}
              label="Flat, House no., Building, Company, Apartment"
            />
            <TextField
              inputProps={register("city")}
              helperText={errors.city?.message}
              error={!!errors.city}
              label="City"
            />
            <TextField
              inputProps={register("state")}
              helperText={errors.state?.message}
              error={!!errors.state}
              label="State"
            />
            <Button
              style={{ marginTop: "30px" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Confirm order
            </Button>
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
                  price={product.price}
                  currency={product.currency}
                  variant="body1"
                />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Typography variant="h6">Total Payable</Typography>
                <Price
                  price={product.price}
                  currency={product.currency}
                  variant="h5"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </form>
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
