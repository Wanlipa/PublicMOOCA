const Sequelize = require('sequelize');

const sequelize = new Sequelize('mooca','root','root',{dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;