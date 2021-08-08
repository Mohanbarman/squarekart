import { Box, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useContext } from "react";
import { FC, useState } from "react";
import { NotificationContext } from "../../context/NotificationContext";
import { ErrorMessage, LoadingIndicator } from "../../shared";
import { IOrder } from "../../types";
import { api } from "../../utils";
import { OrderItem } from "./OrderItem";

export const Orders: FC = () => {
  const [orders, setOrders] = useState<IOrder[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { open: showNotification } = useContext(NotificationContext);

  const loadOrders = async () => {
    setLoading(true);
    const { data, error } = await api.getMyOrders();
    setLoading(false);

    if (data) setOrders(data);
    if (error) {
      showNotification?.(
        error.message || error || "Failed to fetch orders",
        "error"
      );
    }
  };

  useEffect(() => {
    loadOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LoadingIndicator />;
  if (error || !orders) return <ErrorMessage message={error} />;

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5">My Orders</Typography>
      <Box>
        {orders.map((_order) => (
          <OrderItem key={_order.id} order={_order} />
        ))}
      </Box>
    </Box>
  );
};
