import { Router } from "express";
import { slotMachineController } from "../controller";
import { validateRequest } from "../middleware/validateRequest.middleware";
import { slotMachineCashout, slotMachineRoll } from "../schemas";

const router = Router();

router.post("/roll", validateRequest(slotMachineRoll), (req, res, next) => {
  slotMachineController.rollSlotMachine(req, res, next);
});
router.delete(
  "/cashout",
  validateRequest(slotMachineCashout),
  (req, res, next) => {
    slotMachineController.cashOutSlotMachine(req, res, next);
  }
);
router.get("/:sessionId", (req, res, next) => {
  slotMachineController.getSlotMachineSession(req, res, next);
});

export default router;
