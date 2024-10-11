import dotenv from "dotenv";
dotenv.config();
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

export const CONFIG = {
  PORT: process.env.PORT || 3001,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/example",
};
