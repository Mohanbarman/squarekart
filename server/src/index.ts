import express from "express";

import { env, createDbConnection, session } from "./config";
import { cors } from "./middlewares";
import { userRouter } from "./routes";

const app = express();

createDbConnection();

// middlewares
app.use(express.json()); // json parser
app.use(cors); // adding cors headers
app.use(session);

// routes
app.use("/user", userRouter);

app.listen(env.PORT, () => console.log(`Alive on port ${env.PORT} 🚀`));
