const Sequelize = require('sequelize'); 
const config = require('../config/config.json')['development'];

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//AR_LOGIN DB
db.AR_LOGIN = require("./define")(sequelize, Sequelize)

module.exports = db;