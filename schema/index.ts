import dbConfig from "../config/dbConfig";

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db:any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./product")(sequelize, Sequelize);
db.order = require("./orders")(sequelize, Sequelize);
export default db;