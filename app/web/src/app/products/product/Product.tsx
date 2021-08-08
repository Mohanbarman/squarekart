import { Box, Button, Typography } from "@material-ui/core";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { ErrorMessage, LoadingIndicator } from "../../../shared";
import { Price } from "../../../shared/Price";
import { IProduct } from "../../../types";
import { api } from "../../../utils";
import { Img, ProductSection1, RootContainer, TextContent } from "./styled";

export const Product: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { authStatus } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [product, setProduct] = useState<IProduct>();
  const history = useHistory();

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

  const descriptionPoints: string[] = product.description.split("\\n");

  const handleBuyNowClick = () => {
    if (authStatus === "unauthenticated") {
      history.push("/signIn");
      return -1;
    }
    if (authStatus === "authenticated") {
      history.push(`/checkout/${product.id}`);
    }
  };

  return (
    <RootContainer>
      <ProductSection1>
        <Img src={product.photoUrl} alt={product.title} />
        <TextContent>
          <Typography style={{ marginBottom: "10px" }} variant="h5">
            {product.title}
          </Typography>
          <Price
            price={product.price}
            variant="h4"
            currency={product.currency}
          />
          <Button
            style={{ marginTop: "20px" }}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleBuyNowClick}
          >
            Buy now
          </Button>
        </TextContent>
      </ProductSection1>
      <Box>
        <Typography variant="h6" style={{ marginBottom: "10px" }}>
          About this product
        </Typography>
        <ul>
          {descriptionPoints.map((_point) => (
            <li>
              <Typography variant="body1">{_point}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </RootContainer>
  );
};
