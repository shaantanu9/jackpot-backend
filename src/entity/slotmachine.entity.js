"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSlotMachineSession = exports.updateSlotMachineSession = exports.getSlotMachineSession = exports.rollSlotMachine = exports.createSlotMachineSession = void 0;
const slotmachine_model_1 = require("../model/slotmachine.model");
const services_1 = require("../services");
// Create New Session
const createSlotMachineSession = (sessionId) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield slotmachine_model_1.slotMachine.create({
        sessionId,
    });
    return session;
});
exports.createSlotMachineSession = createSlotMachineSession;
// Roll Slot Machine
const rollSlotMachine = (sessionId) => __awaiter(void 0, void 0, void 0, function* () {
    let session = yield slotmachine_model_1.slotMachine.findOne({ sessionId });
    if (!session) {
        session = yield (0, exports.createSlotMachineSession)(sessionId);
    }
    const credits = session.credits - 1;
    const { symbols, updatedCredit } = services_1._slotMachineServices.rollSlotMachine(credits);
    yield (0, exports.updateSlotMachineSession)(sessionId, updatedCredit);
    return { symbols, updatedCredit };
});
exports.rollSlotMachine = rollSlotMachine;
// Get Session By Id | Get Credits
const getSlotMachineSession = (sessionId) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield slotmachine_model_1.slotMachine.findOne({ sessionId });
    return session;
});
exports.getSlotMachineSession = getSlotMachineSession;
// Update Session | Add Credits
const updateSlotMachineSession = (sessionId, credits) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield slotmachine_model_1.slotMachine.findOneAndUpdate({ sessionId }, { credits });
    return session;
});
exports.updateSlotMachineSession = updateSlotMachineSession;
// Delete Session | Cash Out
const deleteSlotMachineSession = (sessionId) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield slotmachine_model_1.slotMachine.findOneAndDelete({ sessionId });
    return session;
});
exports.deleteSlotMachineSession = deleteSlotMachineSession;
