const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db');


const Rap = db.define('Rap', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IDCumRap: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LoaiRap: {
      type: DataTypes.STRING,
    }
});


module.exports = Rap;