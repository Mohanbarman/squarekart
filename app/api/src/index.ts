import express from "express";
import path from "path";

import { env, createDbConnection, session } from "./config";
import { cors } from "./middlewares";
import { productRouter, userRouter } from "./routes";
import { orderRouter } from "./routes/order";

const app = express();

createDbConnection();

// react static files
app.use(express.static(path.resolve(__dirname, "../../web/build")));

// middlewares
app.use(express.json()); // json parser
app.use(cors); // adding cors headers
app.use(session);

// routes
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

// All non /api get requests handled by react
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../../web/build", "index.html"));
});

app.listen(env.PORT, () => console.log(`Alive on port ${env.PORT} 🚀`));
