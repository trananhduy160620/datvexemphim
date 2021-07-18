const ShowTime = require("../models/showtime");
const Movie = require("../models/movie");

exports.getDatVe = async (req, res, next) => {
    const idMovie = req.query.phim;
    const idCinema = req.query.rap;

    const movie = await Movie.findOne({
        where: {ID: idMovie}
    });

    const showTime = await ShowTime.findAll({
        where: {IDRap: idCinema ,IDPhim: idMovie}
    })

    const arrDate = []
    res.render('datve', {showTimeList: showTime, movieName: movie.Ten});
};
