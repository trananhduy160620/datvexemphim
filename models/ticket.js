const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('./db')

const Ticket = db.define('Ve', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    IDDatCho: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    MaGhe: {
        type: Sequelize.STRING,
        allowNull: false
    },
    GiaTien:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {    tableName: 'Ve',
    createdAt: true,
    freezeTableName: true,
    updatedAt: true,
})
module.exports = Ticket
