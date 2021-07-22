
exports.getLichSuDatVe = async (req, res, next) => {
  
  res.render("lichsumuave", {
    isAuthenticated: req.session.userId,
  });
};


