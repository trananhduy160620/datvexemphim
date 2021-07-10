exports.getPhimDangChieu = async (req, res, next) => {
    res.render('phim/danhSachPhim');
};

exports.getChiTietPhim = async (req, res, next) => {
    res.render('phim/chiTietPhim');
};
