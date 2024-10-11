import "dotenv/config";
import express from "express";

import routes from "./routes";
import {
  logError,
  logRequest,
  invalidRouteHandler,
  errorMiddleware,
} from "./middleware";
import cors from "cors";
import connectDB from "./database/db";
import { CONFIG, logger } from "./utils";

export const app = express();

app.use(cors());

app.use(express.json());

app.use(logRequest);

// Health check
app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.use("/", routes);
app.use(invalidRouteHandler);
app.use(errorMiddleware);

app.use(logError);

// Function to start the server
export const startServer = async () => {
  try {
    await connectDB();
    const server = app.listen(CONFIG.PORT, () => {
      logger.info(`Server running on http://localhost:${CONFIG.PORT}`);
    });
    return server;
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};
