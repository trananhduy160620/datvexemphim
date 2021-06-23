const ShowTime = require('../models/showtime.model')

module.exports.listShowTime = async function(req, res) {
    const listOfShowTime = await ShowTime.findAll({
      attributes: ["IDPhim", "IDRap", "ThoiDiemBatDau", "ThoiDiemKetThuc", "GiaVe"]
    })
    console.log(listOfShowTime);
    res.render('list-showtime-movie')
}