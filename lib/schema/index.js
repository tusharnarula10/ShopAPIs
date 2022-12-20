"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dbConfig_1 = __importDefault(require("../config/dbConfig"));
var Sequelize = require("sequelize");
var sequelize = new Sequelize(dbConfig_1.default.DB, dbConfig_1.default.USER, dbConfig_1.default.PASSWORD, {
    host: dbConfig_1.default.HOST,
    dialect: dbConfig_1.default.dialect,
    pool: {
        max: dbConfig_1.default.pool.max,
        min: dbConfig_1.default.pool.min,
        acquire: dbConfig_1.default.pool.acquire,
        idle: dbConfig_1.default.pool.idle
    }
});
var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = require("./product")(sequelize, Sequelize);
db.order = require("./orders")(sequelize, Sequelize);
exports.default = db;
