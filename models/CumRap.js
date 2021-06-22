const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./db');


const CumRap = db.define('CumRap', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
    },
    
  });


module.exports = CumRap;