import { z } from "zod";
export const slotMachineRoll = z.object({
  sessionId: z.string(),
});

export const slotMachineCashout = z.object({
  sessionId: z.string(),
});
