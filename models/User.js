const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('./db')
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
    tableName: 'NguoiDung',
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
})
module.exports = User