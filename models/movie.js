const db = require('./db')

const { Sequelize, Model, DataTypes } = require('sequelize');

const Phim = db.define('Phim', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Ten: {
        type: Sequelize.STRING,
        allowNull: true
    },
    NgayCongChieu: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Poster: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ThoiLuong: {
        type: Sequelize.STRING,
        allowNull: true
    },
    MoTa: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Trailer: {
        type: Sequelize.STRING,
        allowNull: true
    },
    TheLoai: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    tableName: 'Phim',
    createdAt: false,
    freezeTableName: true,
    updatedAt: false,
})
module.exports = Phim
