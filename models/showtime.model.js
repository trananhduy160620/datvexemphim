const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('../database/database')

const ShowTime = db.define('SuatChieu', {
    IDSuatChieu: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    IDPhim: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    IDRap: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ThoiDiemBatDau: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ThoiDiemKetThuc: {
        type: Sequelize.STRING,
        allowNull: true
    },
    GiaVe: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'SuatChieu',
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
})
module.exports = ShowTime
