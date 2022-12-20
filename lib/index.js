"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = __importDefault(require("./api/routes"));
var index_1 = __importDefault(require("./schema/index"));
var dbConfig_1 = __importDefault(require("./config/dbConfig"));
var promise_1 = __importDefault(require("mysql2/promise"));
var app = (0, express_1.default)();
//for bodyParser
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
promise_1.default.createConnection({
    host: dbConfig_1.default.HOST,
    user: dbConfig_1.default.USER,
    password: dbConfig_1.default.PASSWORD,
}).then(function (connection) {
    connection.query("CREATE DATABASE IF NOT EXISTS " + dbConfig_1.default.DB + ";").then(function () {
        // Safe to use sequelize now
        console.log("db creation complete");
        index_1.default.sequelize.sync()
            .then(function () {
            console.log("Synced db.");
        })
            .catch(function (err) {
            console.log("Failed to sync db: " + err.message);
        });
    });
});
app.use('/', routes_1.default);
//for error handling
app.use(function (req, res, next) {
    var error = new Error('Not found');
    error.status = 404;
    next(error);
});
app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
app.listen(3000, function () {
    console.log('The application is listening on port 3000!');
});
