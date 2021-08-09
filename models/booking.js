const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('./db')
const Booking = db.define('DatCho', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    IDNguoiDung: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    IDSuatChieu: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    ThoiDiemDatVe: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
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