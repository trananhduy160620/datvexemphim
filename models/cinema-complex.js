const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('./db')

const CinemaComplex = db.define('CumRap', {
    ID: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true
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
    tableName: 'CumRap',
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
})
module.exports = CinemaComplex
