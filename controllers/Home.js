exports.getHomePage = async (req, res, next) => {
  res.render("Homepage", {
    isAuthenticated: req.session.user,
    title: "Trang chu",
    name: "Do Tien Hiep"
  });
};


