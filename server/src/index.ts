import express from "express";

import { env, createDbConnection, session } from "./config";
import { cors } from "./middlewares";
import { productRouter, userRouter } from "./routes";
import { orderRouter } from "./routes/order";

const app = express();

createDbConnection();

// middlewares
app.use(express.json()); // json parser
app.use(cors); // adding cors headers
app.use(session);

// routes
app.use("/user", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.listen(env.PORT, () => console.log(`Alive on port ${env.PORT} 🚀`));
