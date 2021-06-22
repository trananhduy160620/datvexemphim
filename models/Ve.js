const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("./db");

const Ve = db.define("Ve", {
  // Model attributes are defined here
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  IDDatCho: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  MaGhe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ThoiGianDatVe: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  GiaTien: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Ve;
