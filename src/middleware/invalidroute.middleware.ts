import { Request, Response, NextFunction } from "express";
import { logger } from "../utils";

// Middleware to handle invalid routes (404 errors)
export const invalidRouteHandler = (req: Request, res: Response) => {
  const message = `Invalid route: ${req.method} ${req.originalUrl}`;
  logger.warn(message);

  res.status(404).json({
    message: "Invalid route. Please check the URL and try again.",
    data: { error: "Route not found" },
    statusCode: 404,
  });
};

export const errorMiddleware = (error: Error, req: Request, res: Response) => {
  logger.error("Error:", error);

  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: error.message,
  });
};
