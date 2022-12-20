"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate = function (schema) { return function (req, res, next) {
    var error = schema.validate(req.body).error;
    if (error) {
        res.status(422)
            .send(error.details[0].message);
    }
    else {
        next();
    }
}; };
exports.default = validate;
