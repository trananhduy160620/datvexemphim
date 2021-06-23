const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('../database/database')

const CinemaComplex = db.define('CumRap', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Ten: {
        type: Sequelize.STRING,
        allowNull: true
    },
    DiaChi: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    tableName: 'CumRap'
})
module.exports = CinemaComplex
