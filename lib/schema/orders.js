"use strict";
module.exports = function (sequelize, Sequelize) {
    var orders = sequelize.define("orders", {
        id: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        orderId: {
            type: Sequelize.INTEGER(20),
        },
        customerName: {
            type: Sequelize.STRING(100)
        },
        totalOrderAmount: {
            type: Sequelize.INTEGER(10)
        },
        productTotal: {
            type: Sequelize.INTEGER(10)
        },
        quantity: {
            type: Sequelize.INTEGER(10)
        },
        productId: {
            type: Sequelize.INTEGER(10)
        }
    });
    return orders;
};
