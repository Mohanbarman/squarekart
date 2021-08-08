import { createConnection } from "typeorm";
import * as env from "./env";

export const createDbConnection = async (): Promise<void> => {
  try {
    const prodConfig = {
      url: env.HEROKU_DB_URL,
    };

    const devConfig = {
      host: env.DB_HOST,
      username: env.DB_USERNAME,
      password: env.DB_PASS,
      database: env.DB_NAME,
    };

    const connectionConfig = env.isProduction ? prodConfig : devConfig;

    await createConnection({
      type: "postgres",
      synchronize: true,
      logging: false,
      entities: ["src/entities/*.ts"],
      ...connectionConfig,
    });

    console.log(`Connected to database at ${env.DB_HOST}:${env.DB_PORT} 📁`);
  } catch (e) {
    throw new Error(e);
  }
};
