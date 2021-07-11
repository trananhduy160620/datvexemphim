const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('../database/database')
const Booking = db.define('DatCho', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    IDNguoiDung: {
        type: Sequelize.STRING,
        allowNull: true
    },
    IDSuatChieu: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ThoiDiemDatVe: {
        type: Sequelize.STRING,
        allowNull: true
    },
    TongTien: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'DatCho',
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
})
module.exports = Booking