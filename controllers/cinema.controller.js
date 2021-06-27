const Cinema = require('../models/cinema.model')
const CinemaComplex = require('../models/cinema-complex.model')
const { QueryTypes } = require('sequelize');
const sequelize = require('../database/database')

module.exports.showCinemaPage = async function (req, res) {
    const listOfCity = await CinemaComplex.findAll({
        attributes: ["ID", "Ten", "DiaChi"]
    })
    res.render('add-cinema', { listOfCity: listOfCity })
}
module.exports.listCinema = async function (req, res) {
    const listOfCinema = await Cinema.findAll({
        attributes: ["ID", "Ten", "LoaiRap", "KichThuocChieuNgang", "KichThuocChieuDoc"]
    })
    res.render('list-cinema', { listOfCinema: listOfCinema })
}

module.exports.addCinema = async function (req, res) {
    const listOfID = await Cinema.findAll({
        attributes: ["ID"]
    })
    var randomNum = Math.floor(Math.random() * 100) + 200
    for(let i = 0; i < listOfID.length; i++) {
        if(listOfID[i].ID == randomNum) {
            randomNum = Math.floor(Math.random() * 100) + 200
        }
    }
    const data = {
        ID: randomNum,
        Ten: req.body.ten_rap,
        IDCumRap: Number(req.body.thanh_pho),
        LoaiRap: req.body.loai_rap,
        KichThuocChieuNgang: Number(req.body.chieu_ngang),
        KichThuocChieuDoc: Number(req.body.chieu_doc)
    }
    const cinema = await Cinema.create(data, { 
        fields: ["ID", "Ten", "IDCumRap", "LoaiRap", "KichThuocChieuNgang", "KichThuocChieuDoc"] 
    }).then(data => {
        var statusString = '<p>Thêm rạp thành công</p>' + '<br>' + '<a href="index">Quay lại trang chủ</a>'
        res.send(statusString)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Cinema."
        });
    });
    
}

module.exports.showOldCinema = async function (req, res) {
    const listOfCity = await CinemaComplex.findAll({
        attributes: ["ID", "Ten", "DiaChi"]
    })
    var idCinema = req.query.IdCinema
    var sql = 'SELECT * FROM "Rap"  WHERE "Rap"."ID" = ' + String(idCinema)
    const cinema = await sequelize.query(sql, { type: QueryTypes.SELECT });
    
    res.render('update-cinema', { 
        listOfCity: listOfCity,
        cinema: cinema,
        ID: idCinema
    })
}
module.exports.updateCinema = async function (req, res) {
    var idCinema = req.query.IdCinema
    const data = {
        Ten: req.body.ten_rap,
        IDCumRap: Number(req.body.thanh_pho),
        LoaiRap: req.body.loai_rap,
        KichThuocChieuNgang: Number(req.body.chieu_ngang),
        KichThuocChieuDoc: Number(req.body.chieu_doc)
    }
    console.log(data, idCinema)
    await Cinema.update(data, {
        where: {
          ID: parseInt(idCinema)
        }
    });
    var statusString = '<p>Cập nhật rạp thành công</p>' + '<br>' + '<a href="index">Quay lại trang chủ</a>'
    res.send(statusString)
}

module.exports.deleteCinema = async function (req, res) {
    await Cinema.destroy({
        where: {
          ID: req.query.IdCinema
        }
    });
    var statusString = '<p>Xoá rạp thành công</p>' + '<br>' + '<a href="index">Quay lại trang chủ</a>'
    res.send(statusString)
}