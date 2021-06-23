const db = require('../database/database')

const { Sequelize, Model, DataTypes } = require('sequelize');

const Phim = db.define('Phim', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    }
}, {
    tableName: 'Phim'
})
module.exports = Phim
