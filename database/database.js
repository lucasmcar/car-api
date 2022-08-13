const Sequelize = require('sequelize');

const con = new Sequelize('db_carros_api', 'root', 'Lucas1990',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00',
    dialectModule: require('mysql2'),
});

module.exports = con;