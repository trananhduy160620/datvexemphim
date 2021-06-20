exports.getHomePage = async (req, res, next) => {
  res.render("layouts/index", {
    isAuthenticated: req.session.user,
    title: "Trang chu",
    name: "Do Tien Hiep"
  });
};

exports.getRegister = async (req, res, next) => {
  res.render("register",{ title: 'Đăng ký' });
};



