const CinemaComplex = require('../models/cinema-complex');

exports.getRap = async (req, res, next) => {
    const cinemaComplexs = await CinemaComplex.findAll({
        attributes: ["ID", "Ten", "DiaChi"]
      })
    res.render('menuRap/rapphim', {cinemaComplexs: cinemaComplexs});
};

