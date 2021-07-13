const Movie = require('../models/movie.model');
const { QueryTypes } = require('sequelize');
const sequelize = require('../database/database')
const fs = require('fs')
const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink)
module.exports.listMovie = async function (req, res) {
  // const listOfMovie = await Movie.findAll({
  //   attributes: ["ID", "Ten", "NgayCongChieu", "Poster", "ThoiLuong"]
  // })
  var sql = ' SELECT * FROM "Phim" ORDER BY "Phim"."ID" ' 
  const listOfMovie = await sequelize.query(sql, { type: QueryTypes.SELECT });
  res.render('list-movie', { listOfMovie: listOfMovie })
}

module.exports.showFormAddMovie = function (req, res) {

  res.render('add-movie')
}

module.exports.addMovie = async function (req, res) {

  const listOfID = await Movie.findAll({
    attributes: ["ID"]
  })
  var randomNum = Math.floor(Math.random() * 100) + 200
  for (let i = 0; i < listOfID.length; i++) {
    if (listOfID[i].ID == randomNum) {
      randomNum = Math.floor(Math.random() * 100) + 200
    }
  }
  const data = {
    ID: randomNum,
    Ten: req.body.ten_phim,
    NgayCongChieu: req.body.ngay_cong_chieu,
    Poster: `/uploads/${req.file.filename}`,
    ThoiLuong: req.body.thoi_luong,
  }
  const cinema = await Movie.create(data, {
    fields: ["ID", "Ten", "NgayCongChieu", "Poster", "ThoiLuong"]
  })
  res.redirect('list-movie')
}

module.exports.showOldMovie = async function (req, res) {
  const itemMovie = await Movie.findAll({ where: { ID: req.query.IdMovie } })
  res.render('update-movie', { 
    ID : itemMovie[0].ID,
    Ten : itemMovie[0].Ten,
    NgayCongChieu : itemMovie[0].NgayCongChieu,
    Poster : itemMovie[0].Poster,
    ThoiLuong : itemMovie[0].ThoiLuong
  })
}

module.exports.updateMovie = async function (req, res) {
  const data = {
    Ten: req.body.ten_phim,
    NgayCongChieu: req.body.ngay_cong_chieu,
    Poster: `/uploads/${req.file.filename}`,
    ThoiLuong: req.body.thoi_luong,
  }
  const IdMovie = req.query.IdMovie
  const PosterCu = req.query.Poster

  console.log(data)
  console.log(PosterCu)
  let resultHandler = function (err) {
    if (err) {
      console.log("unlink failed", err);
    } else {
      console.log("file deleted");
    }
  }
  await Movie.update(data, {
    where: {
      ID: parseInt(IdMovie)
    }
  });
  fs.unlink("./public" + PosterCu, resultHandler);
  res.redirect('list-movie')
}

module.exports.deleteMovie = async function (req, res) {

  const itemMovie = await Movie.findAll({ where: { ID: req.query.IdMovie } })
  let resultHandler = function (err) {
    if (err) {
      console.log("unlink failed", err);
    } else {
      console.log("file deleted");
    }
  }

  fs.unlink("./public" + itemMovie[0].Poster, resultHandler);
  await Movie.destroy({
    where: {
      ID: req.query.IdMovie
    }
  });
  res.redirect('list-movie')
}