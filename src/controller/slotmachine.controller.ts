import { NextFunction, Request, Response } from "express";
import { slotMachineEntity } from "../entity";
import { errorResponse, successResponse } from "./base.controller";

export const rollSlotMachine = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { sessionId } = req.body;
  try {
    const data = await slotMachineEntity.rollSlotMachine(sessionId);
    return successResponse(res, data);
  } catch (err) {
    next(err);
  }
};

export const getSlotMachineSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { sessionId } = req.params;
  try {
    const session = await slotMachineEntity.getSlotMachineSession(sessionId);
    if (!session) {
      return errorResponse(res, "session not found", 404);
    }
    return successResponse(res, session);
  } catch (err) {
    next(err);
  }
};

export const cashOutSlotMachine = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { sessionId } = req.body;
  try {
    const session = await slotMachineEntity.deleteSlotMachineSession(sessionId);
    return successResponse(res, session);
  } catch (err) {
    next(err);
  }
};
