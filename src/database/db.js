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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDBConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const utils_1 = require("../utils");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(utils_1.CONFIG.MONGO_URI);
        utils_1.logger.info("MongoDB connected");
    }
    catch (error) {
        utils_1.logger.error("Failed to connect to MongoDB", error);
        process.exit(1);
    }
});
const checkDBConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const state = mongoose_1.default.connection.readyState;
        return !!state;
    }
    catch (error) {
        return false;
    }
});
exports.checkDBConnection = checkDBConnection;
exports.default = connectDB;
