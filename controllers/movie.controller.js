const Phim = require('../models/movie.model');

module.exports.listMovie = async function(req, res) {
    const listOfMovie = await Phim.findAll({
      attributes: ["ID", "Ten", "NgayCongChieu", "Poster", "ThoiLuong"]
    })
    //console.log(listOfMovie);
    res.render('list-movie', {listOfMovie: listOfMovie})
}

module.exports.addMovie = async function(req, res) {

}

module.exports.updateMovie = async function(req, res) {

}

module.exports.deleteMovie = async function(req, res) {

}