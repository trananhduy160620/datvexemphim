const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db');


const Phim = db.define('Phim', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    NgayCongChieu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Poster: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ThoiLuong: {
      type: DataTypes.INTEGER,
    }
});

module.exports = Phim;