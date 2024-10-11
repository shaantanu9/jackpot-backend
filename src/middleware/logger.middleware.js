"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logRequest = void 0;
const utils_1 = require("../utils");
const logRequest = (req, res, next) => {
    utils_1.logger.info(`${req.method} ${req.url} - ${req.ip}`);
    next();
};
exports.logRequest = logRequest;
const logError = (err, req, res, next) => {
    utils_1.logger.error(`${err.message} - ${req.method} ${req.url} - ${req.ip}`);
    next(err);
};
exports.logError = logError;
