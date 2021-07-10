const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("./db");

const DatCho = db.define("DatCho", {
  // Model attributes are defined here
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  IDUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  IDSuatChieu: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ThoiGianDatVe: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  TongTien: {
    type: DataTypes.INTEGER,
  },
});

module.exports = DatCho;
