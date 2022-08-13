const Sequelize = require('sequelize');

const con = require('../database/database');

const Brand = require('./Brand');

const Car = con.define('tb_cars', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    year: {
        type: Sequelize.DATE,
        allowNull: false
    },
    color :{
        type: Sequelize.STRING,
        allowNull: false
    }
});

Car.belongsTo(Brand)

//Car.sync({force: true});

module.exports = Car;