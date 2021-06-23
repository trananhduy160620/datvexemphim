const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('../database/database')

const Cinema = db.define('Rap', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Ten: {
        type: Sequelize.STRING,
        allowNull: true
    },
    IDCumRap: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    LoaiRap: {
        type: Sequelize.STRING,
        allowNull: true
    },
    KichThuocChieuNgang: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    KichThuocChieuDoc: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
}, {
    tableName: 'Rap'
})
module.exports = Cinema
