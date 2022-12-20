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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
var index_1 = __importDefault(require("../../schema/index"));
var productModel_1 = require("./productModel");
var order = index_1.default.order;
var product = index_1.default.products;
var sequelize = index_1.default.sequelize;
var Op = index_1.default.Sequelize.Op;
var OrderModel = /** @class */ (function () {
    function OrderModel() {
        this.productModel = new productModel_1.ProductModel();
    }
    OrderModel.prototype.createOrder = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var t, orderArray, totalAmount_1, orderId, index, element, orderObject, productDetail, result, _a, _b, _c, _d, error_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, sequelize.transaction()];
                    case 1:
                        t = _e.sent();
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 10, , 11]);
                        orderArray = [];
                        totalAmount_1 = 0;
                        orderId = Math.random() + (Date.now() / 1000);
                        index = 0;
                        _e.label = 3;
                    case 3:
                        if (!(index < payload.order.length)) return [3 /*break*/, 8];
                        element = payload.order[index];
                        orderObject = {};
                        return [4 /*yield*/, this.productModel.getProductById(element.id)];
                    case 4:
                        productDetail = _e.sent();
                        if (!(productDetail && productDetail.quantity >= element.quantity)) return [3 /*break*/, 6];
                        orderObject.customerName = payload.customerName;
                        orderObject.productTotal = element.quantity * productDetail.price;
                        orderObject.quantity = element.quantity;
                        orderObject.productId = element.id;
                        orderObject.orderId = orderId;
                        totalAmount_1 += orderObject.productTotal;
                        orderObject.totalOrderAmount = 0;
                        orderArray.push(orderObject);
                        return [4 /*yield*/, product.update({ quantity: (productDetail.quantity - element.quantity) }, {
                                where: { id: productDetail.id }
                            }, { transaction: t })];
                    case 5:
                        _e.sent();
                        return [3 /*break*/, 7];
                    case 6: throw { status: 500, message: "Product is out of stock" };
                    case 7:
                        index++;
                        return [3 /*break*/, 3];
                    case 8:
                        orderArray.forEach(function (element) {
                            element.totalOrderAmount = totalAmount_1;
                        });
                        console.log("orderArray", orderArray);
                        _b = (_a = JSON).parse;
                        _d = (_c = JSON).stringify;
                        return [4 /*yield*/, order.bulkCreate(orderArray, { transaction: t })];
                    case 9:
                        result = _b.apply(_a, [_d.apply(_c, [_e.sent()])]);
                        t.commit();
                        console.info("Response of create order model", result);
                        return [2 /*return*/, { orderId: Math.ceil(result[0].orderId), totalAmount: result[0].totalOrderAmount, status: 'SUCCESS' }];
                    case 10:
                        error_1 = _e.sent();
                        console.error("Error in order model", error_1);
                        t.rollback();
                        throw error_1;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return OrderModel;
}());
exports.OrderModel = OrderModel;
