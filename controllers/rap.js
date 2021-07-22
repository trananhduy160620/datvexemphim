const CinemaComplex = require("../models/cinema-complex");
const Cinema = require("../models/cinema");

exports.getRap = async (req, res, next) => {
  const cinemaComplexs = await CinemaComplex.findAll({
    attributes: ["ID", "Ten", "DiaChi"],
  });
  const cinemaList = [];
  res.render("menuRap/cumrap", {
    isAuthenticated: req.session.userId,
    cinemaList: cinemaList,
    cinemaComplexs: cinemaComplexs,
  });
};

exports.getListRap = async (req, res, next) => {
  const idCinemaComplex = req.params.idCumRap;
  const cinemaList = await Cinema.findAll({
    where: { IDCumRap: idCinemaComplex },
  });
  const cinemaComplexs = await CinemaComplex.findAll({
    attributes: ["ID", "Ten", "DiaChi"],
  });
  res.render("menuRap/rapphim", {
    isAuthenticated: req.session.userId,
    cinemaList: cinemaList,
    cinemaComplexs: cinemaComplexs,
  });
};

