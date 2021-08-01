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
        unique: 'actions_unique',
        allowNull: true
    },
    IDSuatChieu: {
        type: Sequelize.INTEGER,
        unique: 'actions_unique',
        allowNull: true
    },
    ThoiDiemDatVe: {
        type: Sequelize.DATE,
        unique: 'actions_unique',
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
    uniqueKeys: {
        actions_unique: {
            fields: ['IDNguoiDung', 'IDSuatChieu', 'ThoiDiemDatVe']
        }
    }
})
module.exports = Booking