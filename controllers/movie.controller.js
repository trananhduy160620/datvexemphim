const Phim = require('../models/movie.model');

module.exports.listMovie = async function(req, res) {
    const listOfMovie = await Phim.findAll({
      attributes: ["ID", "Ten", "NgayCongChieu", "Poster", "ThoiLuong"]
    })
    res.render('list-movie', {listOfMovie: listOfMovie})
}

module.exports.showFormAddMovie = function (req, res) {

  res.render('add-movie')
}

module.exports.addMovie = async function(req, res) {
  console.log(req.file)
  var result = `<img src="/uploads/${req.file.filename}"><br>`
  console.log(req.file.path, result)
  res.send(result)
}

module.exports.showOldMovie = async function (req, res) {

}

module.exports.updateMovie = async function(req, res) {

}

module.exports.deleteMovie = async function(req, res) {

}