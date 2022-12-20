"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = __importDefault(require("./product"));
var order_1 = __importDefault(require("./order"));
var express_1 = __importDefault(require("express"));
var rootRouter = express_1.default.Router();
rootRouter.use('/product', product_1.default);
rootRouter.use('/order', order_1.default);
exports.default = rootRouter;
