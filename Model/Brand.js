const Sequelize = require('sequelize');

const con = require('../database/database');

const Brand = con.define('tb_brands', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Brand.sync({force: true});

module.exports = Brand;