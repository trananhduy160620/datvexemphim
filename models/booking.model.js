const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('../database/database')
const Booking = db.define('DatCho', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    tableName: 'DatCho'
})
module.exports = Booking