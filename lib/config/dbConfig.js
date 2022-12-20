"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbConfig = {
    "HOST": "localhost",
    "USER": "root",
    "PASSWORD": "vk1234",
    "DB": "mysoDB",
    "dialect": "mysql",
    "pool": {
        "max": 5,
        "min": 0,
        "acquire": 30000,
        "idle": 10000
    }
};
exports.default = dbConfig;
