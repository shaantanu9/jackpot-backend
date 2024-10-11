import { Request, Response, NextFunction } from "express";
import { logger } from "../utils";

export const logRequest = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url} - ${req.ip}`);
  next();
};

export const logError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`${err.message} - ${req.method} ${req.url} - ${req.ip}`);
  next(err);
};
