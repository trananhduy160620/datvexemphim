const CinemaComplex = require('../models/cinema-complex.model')

module.exports.listCinemaComplex = async function(req, res) {
    const listOfCinemaComplex = await CinemaComplex.findAll({
      attributes: ["ID", "Ten", "DiaChi"]
    })
    console.log(listOfCinemaComplex);
    res.render('list-cinema-complex')
}