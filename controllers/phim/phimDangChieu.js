exports.getPhimDangChieu = async (req, res, next) => {
    res.render('phim/phimDangChieu', { title: 'Phim Đang Chiếu' });
};

