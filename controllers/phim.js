const { QueryTypes } = require("sequelize");
const ShowTime = require("../models/showtime");
const Movie = require("../models/movie");
const db = require("../models/db");
const asyncHandler = require("express-async-handler");

exports.getPhimDangChieu = async (req, res, next) => {
  const idCinema = req.query.rap;
  var sql =
    'select DISTINCT "SuatChieu"."IDPhim", "SuatChieu"."IDRap", "ID", "Ten", "NgayCongChieu", "Poster", "ThoiLuong", "TheLoai" from "SuatChieu" join "Phim" on "SuatChieu"."IDPhim" = "Phim"."ID" where "SuatChieu"."IDRap" = ' +
    String(idCinema);
  const showTimeList = await db.query(sql, { type: QueryTypes.SELECT });
  res.render("phim/PhimDangChieu", {
    isAuthenticated: req.session.userId,
    showTimeList: showTimeList,
  });
};

exports.getDetailMovie = asyncHandler(async (req, res) => {
  const idMovie = req.params.idPhim;
  const idCinema = req.query.rap;
  const movie = await Movie.findOne({
    where: { ID: idMovie },
  });
  res.render("phim/chiTietPhim", {
    isAuthenticated: req.session.userId,
    movie: movie,
    idCinema: idCinema,
  });
});

exports.getDatVe = async function (req, res) {
  idCinema = req.query.rap;
  idMovie = req.query.phim;
  str = 'datve?rap=' + idCinema + "&phim=" + idMovie;
  res.redirect(str);
};
