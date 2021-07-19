const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('./db')

const Ticket = db.define('Ve', {
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
}, {
    tableName: 'Ve',
    createdAt: true,
    freezeTableName: true,
    updatedAt: true,
})
module.exports = Ticket
