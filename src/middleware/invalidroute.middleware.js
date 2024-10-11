"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = exports.invalidRouteHandler = void 0;
const utils_1 = require("../utils");
// Middleware to handle invalid routes (404 errors)
const invalidRouteHandler = (req, res) => {
    const message = `Invalid route: ${req.method} ${req.originalUrl}`;
    utils_1.logger.warn(message);
    res.status(404).json({
        message: "Invalid route. Please check the URL and try again.",
        data: { error: "Route not found" },
        statusCode: 404,
    });
};
exports.invalidRouteHandler = invalidRouteHandler;
const errorMiddleware = (error, req, res) => {
    utils_1.logger.error("Error:", error);
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
    });
};
exports.errorMiddleware = errorMiddleware;
