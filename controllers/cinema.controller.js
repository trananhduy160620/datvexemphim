const Cinema = require('../models/cinema.model')

module.exports.listCinema = async function(req, res) {
    const listOfCinema = await Cinema.findAll({
      attributes: ["ID", "Ten", "LoaiRap", "KichThuocChieuNgang", "KichThuocChieuDoc"]
    })
    //console.log(listOfCinema);
    res.render('list-cinema', {listOfCinema: listOfCinema})
}