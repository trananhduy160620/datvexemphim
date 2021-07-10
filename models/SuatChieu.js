const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db');


const SuatChieu = db.define('SuatChieu', {
    // Model attributes are defined here
    IDPhim: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IDRap: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ThoiGianBatDau: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ThoiGianKetThuc: {
      type: DataTypes.DATE,
      allowNull: false
    }
});

module.exports = SuatChieu;