const Movie = require('../models/movie.model');
const CinemaComplex = require('../models/cinema-complex.model')
const { QueryTypes } = require('sequelize');
const sequelize = require('../database/database')

module.exports.showFormDoanhThuTheoCumRap = async function (req, res) {
    const listOfCinemaComplex = await CinemaComplex.findAll(
        {
            attributes: ["ID", "Ten", "DiaChi"],
            order: sequelize.col('ID')
        }
    )
    res.render('doanh-thu-theo-cum-rap', { 
        listOfCinemaComplex: listOfCinemaComplex,
        isShowTable: false 
    })
}

module.exports.thongkeDoanhThuTheoCumRap = async function (req, res) {
    var idCumRap = req.body.cum_rap
    const sql1 = `
        SELECT p."Ten" as TenPhim, cr."Ten" as TenCumRap, dt."ThoiDiemDatVe" as Ngay, dt."TongTien" as TienVe
        FROM "DatCho" dt JOIN "SuatChieu" sc on dt."IDSuatChieu" = sc."IDSuatChieu" JOIN "Rap" r on sc."IDRap" = r."ID" join "Phim" p on sc."IDPhim" = p."ID" JOIN "CumRap" cr on cr."ID" = r."IDCumRap"
        WHERE r."IDCumRap" = ${idCumRap}
        GROUP BY  p."Ten", cr."Ten", dt."TongTien", dt."ThoiDiemDatVe" 
    `
    const sql2 = `
        SELECT  SUM(dt."TongTien")
        FROM "DatCho" dt JOIN "SuatChieu" sc on dt."IDSuatChieu" = sc."IDSuatChieu" JOIN "Rap" r on sc."IDRap" = r."ID" join "Phim" p on sc."IDPhim" = p."ID"
        WHERE r."IDCumRap" = ${idCumRap}
    `
    const chitietdoanhthu = await sequelize.query(sql1, { type: QueryTypes.SELECT });
    const tongdoanhthu = await sequelize.query(sql2, { type: QueryTypes.SELECT });
    const listOfCinemaComplex = await CinemaComplex.findAll(
        {
            attributes: ["ID", "Ten", "DiaChi"],
            order: sequelize.col('ID')
        }
    )
    res.render('doanh-thu-theo-cum-rap', { 
        chitietdoanhthu: chitietdoanhthu,
        tongdoanhthu: tongdoanhthu[0].sum,
        listOfCinemaComplex: listOfCinemaComplex,
        isShowTable: true 
    })
}

module.exports.showFormDoanhThuTheoPhim = async function (req, res) {
    const listOfMovie = await Movie.findAll({
        attributes: ["ID", "Ten", "NgayCongChieu", "Poster", "ThoiLuong"],
        order: sequelize.col('ID')
      })
    res.render('doanh-thu-theo-phim', { 
        listOfMovie: listOfMovie,
        isShowTable: false  
    })
}

module.exports.thongkeDoanhThuTheoPhim = async function (req, res) {
    var idPhim = req.body.id_phim

    const sql = `
        SELECT p."Ten" as TenPhim, r."Ten" as TenRap, dt."ThoiDiemDatVe" as Ngay, dt."TongTien" as TienVe
        FROM "DatCho" dt JOIN "SuatChieu" sc on dt."IDSuatChieu" = sc."IDSuatChieu" JOIN "Rap" r on sc."IDRap" = r."ID" join "Phim" p on sc."IDPhim" = p."ID" JOIN "CumRap" cr on cr."ID" = r."IDCumRap"
        WHERE p."ID" = ${idPhim}
        GROUP BY  p."Ten", r."Ten", dt."TongTien", dt."ThoiDiemDatVe" 
    `
    const listOfMovie = await Movie.findAll({
        attributes: ["ID", "Ten", "NgayCongChieu", "Poster", "ThoiLuong"],
        order: sequelize.col('ID')
    })
    const chitietdoanhthu = await sequelize.query(sql, { type: QueryTypes.SELECT });
    var tongdoanhthu = 0 
    for (var i = 0; i < chitietdoanhthu.length; i++) {
        tongdoanhthu = tongdoanhthu + chitietdoanhthu[i].tienve
    }
    res.render('doanh-thu-theo-phim', { 
        chitietdoanhthu: chitietdoanhthu,
        tongdoanhthu: tongdoanhthu,
        listOfMovie: listOfMovie,
        isShowTable: true  
    })
}