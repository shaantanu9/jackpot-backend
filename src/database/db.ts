import mongoose from "mongoose";
import { logger, CONFIG } from "../utils";

const connectDB = async () => {
  try {
    await mongoose.connect(CONFIG.MONGO_URI as string);
    logger.info("MongoDB connected");
  } catch (error) {
    logger.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

export const checkDBConnection = async () => {
  try {
    const state = mongoose.connection.readyState;
    return !!state;
  } catch (error) {
    return false;
  }
};

export default connectDB;
