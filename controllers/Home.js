const User = require('../models/User');
const CumRap = require('../models/CumRap');
const Rap = require('../models/Rap');
const Phim = require('../models/Phim');
const SuatChieu = require('../models/SuatChieu');
const DatCho = require('../models/DatCho');
const Ve = require('../models/Ve');


exports.getHomePage = async (req, res, next) => {
  res.render("layouts/index", {});
};

exports.getRegister = async (req, res, next) => {
  res.render("register");
};



