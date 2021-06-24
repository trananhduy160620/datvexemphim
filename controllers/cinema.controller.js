const Cinema = require('../models/cinema.model')
const CinemaComplex = require('../models/cinema-complex.model')

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
    const data = {
        //id: Math.floor(Math.random() * 100),
        ID: Math.floor(Math.random() * 100),
        Ten: req.body.ten_rap,
        IDCumRap: Number(req.body.thanh_pho),
        LoaiRap: req.body.loai_rap,
        KichThuocChieuNgang: Number(req.body.chieu_ngang),
        KichThuocChieuDoc: Number(req.body.chieu_doc)
    }
    console.log(data)
    const cinema = await Cinema.create(data, { 
        fields: ["Ten", "IDCumRap", "LoaiRap", "KichThuocChieuNgang", "KichThuocChieuDoc"] 
    }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
    
}

module.exports.updateCinema = async function (req, res) {

}

module.exports.deleteCinema = async function (req, res) {

}