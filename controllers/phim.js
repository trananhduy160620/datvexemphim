const { QueryTypes } = require('sequelize');
const ShowTime = require("../models/showtime");
const db = require('../models/db');

exports.getPhimDangChieu = async (req, res, next) => {
  const idCinema = req.query.rap;
  var sql = 'select DISTINCT "SuatChieu"."IDPhim", "SuatChieu"."IDRap", "ID", "Ten", "NgayCongChieu", "Poster", "ThoiLuong" from "SuatChieu" join "Phim" on "SuatChieu"."IDPhim" = "Phim"."ID" where "SuatChieu"."IDRap" = ' + String(idCinema);
  const showTimeList = await db.query(sql, { type: QueryTypes.SELECT });
  res.render("phim/PhimDangChieu", {isAuthenticated: req.session.userId, showTimeList: showTimeList });
};

exports.getChiTietPhim = async (req, res, next) => {
  res.render("phim/chiTietPhim", {isAuthenticated: req.session.userId});
};
