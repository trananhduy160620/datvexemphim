const ShowTime = require("../models/showtime");
const Movie = require("../models/movie");

const alphabet = 'abcdefg';
const SEATS_ROWS = 7;
const SEATS_COLUMNS = 14;

exports.getDatVe = async (req, res, next) => {
    const idMovie = req.query.phim;
    const idCinema = req.query.rap;

    const movie = await Movie.findOne({
        where: {ID: idMovie}
    });

    const showTime = await ShowTime.findOne({
        where: {IDRap: idCinema ,IDPhim: idMovie}
    })
    
    const seats = [];

    for(let x = 0; x < SEATS_ROWS; x++){
        const row = alphabet[x].toUpperCase();
        for(let y = 0; y < SEATS_COLUMNS; y++){
            const dict = {};
            dict['code'] = row + (y+1).toString();
            dict['isAvailable'] = true;
            seats.push(dict);
        }
    }

    res.render('datve', {showTimeList: showTime, movieName: movie.Ten, seats: seats});
};
