"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkout = exports.getProductList = void 0;
var joi_1 = __importDefault(require("joi"));
exports.getProductList = joi_1.default.object()
    .keys({
    sort: joi_1.default.string()
        .optional(),
    order: joi_1.default.string()
        .optional(),
    search: joi_1.default.string()
        .optional()
        .min(1)
});
exports.checkout = joi_1.default.object()
    .keys({
    customerName: joi_1.default.string()
        .required()
        .min(1),
    order: joi_1.default.array().items({
        id: joi_1.default.number()
            .required(),
        quantity: joi_1.default.number()
            .required(),
    })
});
