import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { FC, useState } from "react";
import { ErrorMessage, LoadingIndicator } from "../../shared";
import { IProduct } from "../../types";
import { api } from "../../utils";
import { ProductItem } from "./ProductItem";

export const Products: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await api.getAllProducts();
    setLoading(false);
    if (data) {
      setProducts(data);
      setLoading(false);
      return;
    }
    setError(error || "Failed to fetch products");
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Box display="flex" flexDirection="column" gridGap="20px">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Box>
  );
};
