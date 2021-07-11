const CinemaComplex = require('../models/cinema-complex.model')
const { QueryTypes } = require('sequelize');
const sequelize = require('../database/database')


module.exports.listCinemaComplex = async function(req, res) {
    const listOfCinemaComplex = await CinemaComplex.findAll({
      attributes: ["ID", "Ten", "DiaChi"]
    })
    res.render('list-cinema-complex' ,{listOfCinemaComplex: listOfCinemaComplex})
}


module.exports.showCinemaComplexAddPage = async function (req, res) {
    const listOfCity = await CinemaComplex.findAll({
        attributes: ["ID", "Ten", "DiaChi"]
    })
    res.render('add-cinema-complex', { listOfCity: listOfCity })
}
module.exports.addCinemaComplex = async function (req, res) {
    
    const listOfID = await CinemaComplex.findAll({
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
        Ten: req.body.ten_cum_rap,
        DiaChi: req.body.thanh_pho
    }
    const cinema = await CinemaComplex.create(data, { 
        fields: ["ID", "Ten", "DiaChi"] 
    })
    res.redirect('list-cinema-complex')
}

module.exports.showOldCinemaComplex = async function (req, res) {
    const listOfCity = await CinemaComplex.findAll({
        attributes: ["ID", "Ten", "DiaChi"]
    })
    var idCinemaComplex = req.query.IdCinemaComplex
    var sql = 'SELECT * FROM "CumRap"  WHERE "CumRap"."ID" = ' + String(idCinemaComplex)
    const cinemaComplex = await sequelize.query(sql, { type: QueryTypes.SELECT });
    
    res.render('update-cinema-complex', { 
        listOfCity: listOfCity,
        cinemaComplex: cinemaComplex,
        ID: idCinemaComplex
    })
}

module.exports.updateCinemaComplex = async function (req, res) {
    var idCinemaComplex = req.query.IdCinemaComplex
    const data = {
        Ten: req.body.ten_cum_rap,
        DiaChi:req.body.thanh_pho
    }
    await CinemaComplex.update(data, {
        where: {
          ID: parseInt(idCinemaComplex)
        }
    });
    res.redirect('list-cinema-complex')
}

module.exports.deleteCinemaComplex = async function (req, res) {
    // IdCinemaComplex
    await CinemaComplex.destroy({
        where: {
          ID: parseInt(req.query.IdCinemaComplex),
        }
    });
    res.redirect('list-cinema-complex')
}