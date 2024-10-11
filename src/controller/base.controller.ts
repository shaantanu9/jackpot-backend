import { Response } from "express";

export const successResponse = (res: Response, data: any) => {
  return res.status(200).json({
    message: "Success",
    data,
    statusCode: 200,
  });
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode: number
) => {
  return res.status(statusCode).json({
    message,
    data: null,
    statusCode,
  });
};
