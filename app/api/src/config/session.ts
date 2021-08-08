import expressSession from "express-session";
import PgSession from "connect-pg-simple";
import * as env from "./env";

const sessionStore = PgSession(expressSession);

const prodConfig = {
  connectionString: env.HEROKU_DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const devConfig = {
  host: env.DB_HOST,
  user: env.DB_USERNAME,
  password: env.DB_PASS,
  database: env.DB_NAME,
  port: env.DB_PORT,
};

const connectionConfig = env.isProduction ? prodConfig : devConfig;

const pgStore = new sessionStore({
  conObject: connectionConfig,
  tableName: "session",
});

const devCookieConfig = {
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
};

const prodCookiConfig = {
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  sameSite: "none",
  secure: true,
};

export const session = expressSession({
  secret: env.EXPRESS_SESSION_SECRET,
  saveUninitialized: true,
  store: pgStore,
  cookie: env.isProduction ? prodCookiConfig : devCookieConfig,
});
