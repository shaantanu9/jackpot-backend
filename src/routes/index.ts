import { Router } from "express";
import slotMachineRoutes from "./slotmachine.routes";

const router = Router();
router.use("/api/slot-machine", slotMachineRoutes);

export default router;
