const Sequelize = require('sequelize');
const dbconfig = require('../config/database');
const Company = require('../model/Company');

const connection = new Sequelize(dbconfig);

Company.init(connection);

module.exports = connection;