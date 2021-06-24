const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('../database/database')

const Ticket = db.define('Ve', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    IDDatCho: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    MaGhe: {
        type: Sequelize.STRING,
        allowNull: true
    },
    DiaChiNgang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    DiaChiDoc: {
        type: Sequelize.STRING,
        allowNull: true
    },
    GiaTien:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'Ve',
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
})
module.exports = Ticket
