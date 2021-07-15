const ShowTime = require("../models/showtime");

exports.getDatVe = async (req, res, next) => {
    const arrDate = []
    res.render('datve', {arrDate: arrDate});
};
