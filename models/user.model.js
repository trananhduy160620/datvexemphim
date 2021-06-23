const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('../database/database')
const User = db.define('NguoiDung', {
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    MatKhau: {
        type: Sequelize.STRING,
        allowNull: true
    },
    HoTen: {
        type: Sequelize.STRING,
        allowNull: true
    },
    SDT: {
        type: Sequelize.STRING,
        allowNull: true
    },
    VaiTro: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'NguoiDung'
})
module.exports = User