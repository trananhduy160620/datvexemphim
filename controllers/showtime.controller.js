const ShowTime = require('../models/showtime.model')
const { QueryTypes } = require('sequelize');
const sequelize = require('../database/database')

module.exports.listShowTime = async function(req, res) {
    var sql = 'SELECT "Phim"."Ten" AS "TenPhim", "Rap"."Ten" AS "TenRap", "SuatChieu".* from "SuatChieu" join "Rap" on "SuatChieu"."IDRap" = "Rap"."ID" join "Phim" on "SuatChieu"."IDPhim" = "Phim"."ID";'
    const listOfShowTime = await sequelize.query(sql, { type: QueryTypes.SELECT });
    res.render('list-showtime-movie', {listOfShowTime: listOfShowTime})
}

module.exports.displayShowtimeAddForm = async function (req, res) {

}

module.exports.addShowtimeMovie = async function (req, res) {

}

module.exports.displayOldShowtime = async function (req, res) {

}

module.exports.updateShowtimeMovie = async function (req, res) {

}

module.exports.deleteShowtimeMovie = async function (req, res) {
    
}