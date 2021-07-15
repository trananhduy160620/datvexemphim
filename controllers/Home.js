// const User = require('../models/user');
// const CinemaComplex = require('../models/cinema-complex');
// const cinema = require('../models/cinema');
// const movie = require('../models/movie');
const showtime = require('../models/showtime');
// const booking = require('../models/booking');
// const ticker = require('../models/ticket');


exports.getHomePage = async (req, res, next) => {
  res.render("layouts/index", {});
};

exports.getRegister = async (req, res, next) => {
  res.render("register");
};



