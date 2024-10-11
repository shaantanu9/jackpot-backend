import mongoose from "mongoose";
import { ENUM } from "../utils/enum";

interface ISlotMachine {
  credits: number;
  sessionId: string;
}

const slotMachineSchema = new mongoose.Schema(
  {
    credits: {
      type: Number,
      required: true,
      default: 10,
    },
    sessionId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: ENUM.COLLECTIONS.SLOTMACHINE,
  }
);

// index for sessionId
slotMachineSchema.index({ sessionId: 1 }, { unique: true });

export const slotMachine = mongoose.model<ISlotMachine>(
  ENUM.COLLECTIONS.SLOTMACHINE,
  slotMachineSchema
);
