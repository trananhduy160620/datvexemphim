const Phim = require('../models/movie.model');

module.exports.listMovie = async function(req, res) {
    const listOfMovie = await Phim.findAll({
      attributes: ["ID", "Ten", "NgayCongChieu", "Poster", "ThoiLuong"]
    })
    //console.log(listOfMovie);
    res.render('list-movie', {listOfMovie: listOfMovie})
}