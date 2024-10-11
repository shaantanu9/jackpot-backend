import { logger } from "../utils";
import { slotMachine } from "../model/slotmachine.model";
import { _slotMachineServices } from "../services";

// Create New Session
export const createSlotMachineSession = async (sessionId: string) => {
  const session = await slotMachine.create({
    sessionId,
  });
  return session;
};

// Roll Slot Machine
export const rollSlotMachine = async (sessionId: string) => {
  let session = await slotMachine.findOne({ sessionId });
  if (!session) {
    session = await createSlotMachineSession(sessionId);
  }
  const credits = session.credits - 1;
  const { symbols, updatedCredit } =
    _slotMachineServices.rollSlotMachine(credits);
  await updateSlotMachineSession(sessionId, updatedCredit);
  return { symbols, updatedCredit };
};

// Get Session By Id | Get Credits
export const getSlotMachineSession = async (sessionId: string) => {
  const session = await slotMachine.findOne({ sessionId });
  return session;
};

// Update Session | Add Credits
export const updateSlotMachineSession = async (
  sessionId: string,
  credits: number
) => {
  const session = await slotMachine.findOneAndUpdate(
    { sessionId },
    { credits }
  );
  return session;
};

// Delete Session | Cash Out
export const deleteSlotMachineSession = async (sessionId: string) => {
  const session = await slotMachine.findOneAndDelete({ sessionId });
  return session;
};
