const ShowTime = require('../models/showtime.model')
const Movie = require('../models/movie.model')
const Cinema = require('../models/cinema.model')
const { QueryTypes } = require('sequelize')
const CinemaComplex = require('../models/cinema-complex.model')
const sequelize = require('../database/database')

function decodeDateTimeString(datetimeString) {
    
    var temp = datetimeString.split(" ")
    var time = temp[0]
    var dateArray = temp[1].split("/")
    var day = dateArray[0]
    var month = dateArray[1]
    var year = dateArray[2]
    return year + "-" + month + "-" + day + "T" + time
}

function encodeDateTimeString(datetimeString) {
    var temp = datetimeString.split("T")
    var time = temp[1]
    var dateArray = temp[0].split("-")
    var year = dateArray[0]
    var month = dateArray[1]
    var day = dateArray[2]
    return time + " " + day + "/" + month + "/" + year 
}
module.exports.listShowTime = async function(req, res) {
    var sql = 'SELECT "Phim"."Ten" AS "TenPhim", "Rap"."Ten" AS "TenRap", "SuatChieu".* from "SuatChieu" join "Rap" on "SuatChieu"."IDRap" = "Rap"."ID" join "Phim" on "SuatChieu"."IDPhim" = "Phim"."ID" ORDER BY "SuatChieu"."IDSuatChieu";'
    const listOfShowTime = await sequelize.query(sql, { type: QueryTypes.SELECT });
    res.render('list-showtime-movie', {listOfShowTime: listOfShowTime})
}

module.exports.displayShowtimeAddForm = async function (req, res) {
    const listOfMovie = await Movie.findAll()
    const listOfCinema = await Cinema.findAll()
    res.render('add-showtime-movie', {
        listOfMovie:listOfMovie,
        listOfCinema:listOfCinema
    })
}

module.exports.addShowtimeMovie = async function (req, res) {
    
    const data = {
        IDPhim: Number(req.body.id_phim),
        IDRap: Number(req.body.id_rap),
        ThoiDiemBatDau: encodeDateTimeString(req.body.thoi_diem_bd),
        ThoiDiemKetThuc: encodeDateTimeString(req.body.thoi_diem_kt),
        GiaVe: Number(req.body.gia_ve)
    }
    const cinema = await ShowTime.create(data, { 
        fields: ["IDPhim", "IDRap", "ThoiDiemBatDau", "ThoiDiemKetThuc", "GiaVe"] 
    })
    res.redirect('list-showtime-movie')
}

module.exports.displayOldShowtime = async function (req, res) {
    var idMovie = req.query.IdPhim
    var sql1 = 'SELECT * FROM "Phim"'
    const listOfMovie = await sequelize.query(sql1, { type: QueryTypes.SELECT });

    var idCinema = req.query.IdRap
    var sql2 = 'SELECT * FROM "Rap"'
    const listOfCinema = await sequelize.query(sql2, { type: QueryTypes.SELECT });

    var sql3  = 'SELECT * FROM "SuatChieu" WHERE "SuatChieu"."IDPhim" = ' +  String(idMovie) +' and "SuatChieu"."IDRap" = ' +  String(idCinema)
    const suatChieu = await sequelize.query(sql3, { type: QueryTypes.SELECT });
    res.render('update-showtime-movie', { 
        listOfMovie: listOfMovie,
        listOfCinema: listOfCinema,
        IDRap: idCinema,
        IDPhim: idMovie,
        thoidiembatdau: decodeDateTimeString(suatChieu[0].ThoiDiemBatDau),
        thoidiemketthuc: decodeDateTimeString(suatChieu[0].ThoiDiemKetThuc),
        giave: suatChieu[0].GiaVe,
    })
}

module.exports.updateShowtimeMovie = async function (req, res) {
    const data = {
        IDPhim: Number(req.body.id_phim),
        IDRap: Number(req.body.id_rap),
        ThoiDiemBatDau: req.body.thoi_diem_bd.replace("T", " "),
        ThoiDiemKetThuc: req.body.thoi_diem_kt.replace("T", " "),
        GiaVe: Number(req.body.gia_ve)
    }
    
    await ShowTime.update(data, {
        where: {
            IDPhim: parseInt(req.query.IdPhim),
            IDRap: parseInt(req.query.IdRap),
        }
    });
    res.redirect('list-showtime-movie')
}

module.exports.deleteShowtimeMovie = async function (req, res) {
    await ShowTime.destroy({
        where: {
          IDPhim: parseInt(req.query.IdPhim),
          IDRap: parseInt(req.query.IdRap),
        }
    });
    res.redirect('list-showtime-movie')
}