import { Typography } from "@material-ui/core";
import { FC } from "react";

interface IProps {
  price: number;
  currency: string;
  variant: string;
}

export const Price: FC<IProps> = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: props.currency,
    minimumFractionDigits: 2,
  });

  const formattedPrice = formatter.format(props.price);

  return (
    <Typography variant={props.variant as any}>{formattedPrice}</Typography>
  );
};
