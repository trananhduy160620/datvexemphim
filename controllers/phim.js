exports.getPhimDangChieu = async (req, res, next) => {
    res.render('phim/danhSachPhim', { title: 'Phim Đang Chiếu' });
};

exports.getChiTietPhim = async (req, res, next) => {
    res.render('phim/chiTietPhim', { title: 'Chi tiet phim' });
};
