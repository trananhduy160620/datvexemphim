-- -------------------------------------------------------------
-- TablePlus 4.0.0(370)
--
-- https://tableplus.com/
--
-- Database: DATVEXEMPHIM
-- Generation Time: 2021-07-11 16:41:30.5400
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."CumRap" (
    "ID" int4,
    "Ten" text,
    "DiaChi" text
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."DatCho" (
    "ID" int4,
    "IDNguoiDung" text,
    "IDSuatChieu" text,
    "ThoiDiemDatVe" text,
    "TongTien" int4
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."NguoiDung" (
    "UserID" int4,
    "Email" text,
    "MatKhau" text,
    "HoTen" text,
    "SDT" text,
    "VaiTro" int4
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."Phim" (
    "ID" int4,
    "Ten" text,
    "NgayCongChieu" text,
    "Poster" text,
    "ThoiLuong" text
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."Rap" (
    "ID" int4,
    "Ten" text,
    "IDCumRap" int4,
    "LoaiRap" text,
    "KichThuocChieuNgang" int4,
    "KichThuocChieuDoc" int4
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."SuatChieu" (
    "IDPhim" int4,
    "IDRap" int4,
    "ThoiDiemBatDau" text,
    "ThoiDiemKetThuc" text,
    "GiaVe" int4
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."Ve" (
    "ID" int4,
    "IDDatCho" int4,
    "MaGhe" text,
    "DiaChiNgang" text,
    "DiaChiDoc" text,
    "GiaTien" int4
);

INSERT INTO "public"."CumRap" ("ID", "Ten", "DiaChi") VALUES
(2, 'CGV Hà Nội', 'Hà Nội'),
(3, ' CGV Đà Nẵng', 'Đà nẵng'),
(4, ' CGV Cần Thơ', 'Cần Thơ'),
(5, ' CGV Đồng Nai', 'Đồng Nai'),
(6, ' CGV Hải Phòng', 'Hài Phòng'),
(7, ' CGV Quảng Ninh', 'QUảng Ninh'),
(8, ' CGV Bà Rịa - Vũng Tàu', 'Bà Rịa - Vũng Tàu'),
(9, ' CGV Bình Định', 'Bình Định'),
(10, ' CGV Bình Dương', 'Bình Dương'),
(11, ' CGV Đắk Lắk', 'Đắk Lắk'),
(12, ' CGV Trà Vinh', 'Trà Vinh'),
(13, ' CGV Yên Bái', 'Yên Bái'),
(14, ' CGV Vĩnh Long', 'Vĩnh Long'),
(15, ' CGV Kiên Giang', 'Kiên Giang'),
(16, ' CGV Hậu Giang', 'Hậu Giang'),
(17, ' CGV Hà Tĩnh', 'Hà Tĩnh'),
(18, ' CGV Phú Yên', 'Phú Yên'),
(19, ' CGV Đồng Tháp', 'Đồng Tháp'),
(20, ' CGV Hưng Yên', 'Hưng Yên'),
(21, ' CGV Khánh Hoà', 'Khánh Hoá'),
(22, ' CGV Kon Tum ', 'Kon Tum'),
(23, ' CGV Lạng Sơn', 'Lạng Sơn'),
(24, ' CGV Nghệ An', 'Nghệ An'),
(25, ' CGV Quảng Ngãi', 'Quảng Ngãi'),
(26, ' CGV Sóc Trăng', 'Sóc Trăng'),
(27, ' CGV Sơn La', 'Sơn La'),
(28, ' CGV Tây Ninh', 'Tây Ninh'),
(29, ' CGV Thái Nguyên', 'Thái Nguyên'),
(1, 'CGV Hồ Chí Minh', 'Hà Nội'),
(260, 'CGV Hạnh Phúc', 'Hậu Giang');

INSERT INTO "public"."Phim" ("ID", "Ten", "NgayCongChieu", "Poster", "ThoiLuong") VALUES
(1, 'Xuyên qua hoả tiễn', '14/06/2021', 'https://img.goophim.net/storage/2020/10/crossfire.jpg', '93 phút'),
(2, 'Vụ sơn ngũ hành', '18/06/2021', 'https://img.goophim.net/storage/2021/05/fog-hill-of-the-five-elements1621786868.png', '90 phút'),
(3, 'Liệt dương thiên đạo', '19/06/2021', 'https://img.goophim.net/storage/2021/05/lie-yang-tiandao1621789524.jpg', '90 phút'),
(4, 'Bóng chày nữ sinh', '20/06/2021', 'https://image.hayghe.org/data/film/Bong-Chay-Nu-Sinh.jpg', '90 phút'),
(5, 'The Furious Yama', '01/06/2021', 'https://img.goophim.net/storage/2021/05/the-furious-yama1621780961.jpg', '98 phút'),
(6, 'Sợi xích thần (Gleipnir)', '03/06/2021', 'https://img.goophim.net/storage/2020/10/gleipnir.jpg', '69 phút'),
(7, 'Biên niên sử IDHUN ', '05/06/2021', 'https://img.goophim.net/storage/2020/10/the-idhun-chronicles.jpg', '70 phút'),
(8, 'Những Idol xinh đẹp', '06/06/2021', 'https://img.goophim.net/storage/2020/10/lapis-re-lights.jpg', '79 phút'),
(9, 'Đại thoại chi thiếu niên du', '07/06/2021', 'https://img.goophim.net/storage/2021/05/dahua-zhi-shaonian-you1621779540.jpg', '97 phút'),
(10, 'Are you ok ', '12/06/2021', 'https://img.goophim.net/storage/2021/05/are-you-ok1621778272.jpg', '99 phút'),
(11, 'Cô dâu tuổi teen', '07/06/2021', 'https://img.goophim.net/storage/2020/10/teen-bride-that-is-not-a-child-but-a-minor.jpg', '100 phút'),
(12, ' Hoá giải lời nguyền', '08/06/2021', 'https://img.goophim.net/storage/2021/05/fruits-basket-phan-21621776887.jpg', '120 phút'),
(13, 'Chiến binh huyền thoại', '23/06/2021', 'https://img.goophim.net/storage/2020/10/savage-dog.jpg', '130 phút'),
(14, 'Chiến hạm mỹ nữ', '29/06/2021', 'https://img.goophim.net/storage/2020/10/jian-ji.jpg', '89 phút'),
(15, 'Vũ động càn khôn', '30/06/2021', 'https://img.goophim.net/storage/2021/05/martial-universe-21621777766.jpg', '80 phút'),
(16, 'Đấu la đại lục', '01/07/2021', 'https://img.goophim.net/storage/2020/10/soul-land.jpg', '120 phút'),
(17, 'Công chúa ma cà rồng', '09/07/2021', 'https://img.goophim.net/storage/2020/10/the-last-vampire-princess-guardians-of-the-night.jpg', '100 phút'),
(18, 'Cô gái và gã khổng lồ', '08/07/2021', 'https://img.goophim.net/storage/2020/10/colossal.jpg', '98 phút'),
(19, 'Chú hề ma quái', '02/07/2021', 'https://img.goophim.net/storage/2020/10/it.jpg', '95 phút'),
(20, 'Chuyến đi dạo kinh hoàng', '04/07/2021', 'https://img.goophim.net/storage/2020/10/extortion.jpg', '89 phút'),
(21, 'Cô dâu ma', '13/07/2021', 'https://img.goophim.net/storage/2020/10/the-bride-nevesta.jpg', '120 phút'),
(22, 'Cảnh sát tập sự', '16/07/2021', 'https://img.goophim.net/storage/2020/10/midnight-runners-young-cop.jpg', '79 phút'),
(23, 'Búp bê ma ám 2: Tạo vật quỷ dữ', '11/07/2021', 'https://img.goophim.net/storage/2020/10/annabelle-2-creation.jpg', '120 phút'),
(23, 'Chiến trường BushWick', '13/07/2021', 'https://img.goophim.net/storage/2020/10/bushwick.jpg', '90 phút'),
(25, 'Quái vật xe tải', '15/07/2021', 'https://img.goophim.net/storage/2020/10/monster-trucks.jpg', '78 phút');

INSERT INTO "public"."Rap" ("ID", "Ten", "IDCumRap", "LoaiRap", "KichThuocChieuNgang", "KichThuocChieuDoc") VALUES
(2, 'CGV Crescent Mall', 1, '3D', 1460, 1100),
(3, 'CGV Thảo Điền Pearl', 1, '3D', 1460, 1100),
(4, 'CGV Vincom Thủ Đức', 1, '3D', 1460, 1100),
(5, 'CGV Vivo City', 1, '3D', 1460, 1100),
(6, 'CGV Pearl Plaza', 1, '3D', 1460, 1100),
(7, 'CGV Liberty Citypoint', 1, '3D', 1460, 1100),
(8, 'CGV Vincom Đồng Khởi', 1, '3D', 1460, 1100),
(9, 'CGV Trường Sơn (CGV CT Plaza)', 1, '3D', 1460, 1100),
(10, 'CGV Pandora City', 1, '3D', 1460, 1100),
(11, 'CGV Aeon Tân Phú', 1, '3D', 1460, 1100),
(12, 'CGV Vincom Gò Vấp', 1, '2D', 1460, 1100),
(13, 'CGV Hoàng Văn Thụ', 1, '2D', 1460, 1100),
(14, 'CGV Aeon Bình Tân', 1, '2D', 1460, 1100),
(15, 'CGV Saigonres Nguyễn Xí', 1, '2D', 1460, 1100),
(16, 'CGV Parkson Đồng Khởi', 1, '3D', 1460, 1100),
(17, 'CGV Sư Vạn Hạnh', 1, '3D', 1460, 1100),
(18, 'CGV Vincom Center Landmark 81', 1, '3D', 1460, 1100),
(36, 'CGV Sun Grand Lương Yên', 2, '3D', 1460, 1100),
(37, 'CGV Vincom Bắc Từ Liêm', 2, '3D', 1460, 1100),
(38, 'CGV Vincom Metropolis Liễu Giai', 2, '3D', 1460, 1100),
(39, 'CGV Xuân Diệu', 2, '3D', 1460, 1100),
(40, 'CGV Vincom Sky Lake Phạm Hùng', 2, '3D', 1460, 1100),
(41, 'CGV Vincom Trần Duy Hưng', 2, '3D', 1460, 1100),
(42, 'CGV Aeon Hà Đông', 2, '3D', 1460, 1100),
(43, 'CGV Vincom Ocean Park', 2, '3D', 1460, 1100),
(44, 'CGV Vĩnh Trung Plaza', 3, '3D', 1460, 1100),
(45, 'CGV Vincom Đà Nẵng', 3, '3D', 1460, 1100),
(46, 'CGV Sense City', 4, '3D', 1460, 1100),
(47, 'CGV Vincom Xuân Khánh', 4, '4D', 1460, 1100),
(48, 'CGV Vincom Hùng Vương', 4, '4D', 1460, 1100),
(49, 'CGV Coopmart Biên Hòa', 5, '4D', 1460, 1100),
(50, 'CGV Big C Đồng Nai', 5, '4D', 1460, 1100),
(51, 'CGV Thùy Dương Plaza', 6, '4D', 1460, 1100),
(52, 'CGV Vincom Hải Phòng', 6, '4D', 1460, 1100),
(53, 'CGV Vincom Hạ Long', 7, '4D', 1460, 1100),
(54, 'CGV Vincom Móng Cái', 7, '4D', 1460, 1100),
(55, 'CGV Vincom Cẩm Phả', 7, '4D', 1460, 1100),
(56, 'CGV Lam Sơn Square', 8, '4D', 1460, 1100),
(57, 'CGV Kim Cúc Plaza', 9, '4D', 1460, 1100),
(58, 'CGV Bình Dương Square', 10, '4D', 1460, 1100),
(59, 'CGV Aeon Canary', 10, '4D', 1460, 1100),
(60, 'CGV Buôn Mê Thuột', 11, '4D', 1460, 1100),
(61, 'CGV Vincom Trà Vinh', 12, '4D', 1460, 1100),
(62, 'CGV Vincom Yên Bái', 13, '4D', 1460, 1100),
(63, 'CGV Vincom Vĩnh Long', 14, '4D', 1460, 1100),
(64, 'CGV Vincom Rạch Giá', 15, '4D', 1460, 1100),
(65, 'CGV Vincom Vị Thanh', 16, '4D', 1460, 1100),
(66, 'CGV Vincom Hà Tĩnh', 17, '4D', 1460, 1100),
(67, 'CGV Vincom Phú Yên', 18, '4D', 1460, 1100),
(68, 'CGV Vincom Cao Lãnh', 19, '4D', 1460, 1100),
(69, 'CGV Ecopark Hưng Yên', 20, '4D', 1460, 1100),
(70, 'CGV Big C Nha Trang', 21, '4D', 1460, 1100),
(71, 'CGV Vincom Kon Tum', 22, '4D', 1460, 1100),
(73, 'CGV Vinh Centre', 24, '4D', 1460, 1100),
(19, 'CGV Satra Củ Chi', 1, '3D', 1460, 1100),
(20, 'CGV Giga Mall Thủ Đức', 1, '3D', 1460, 1100),
(21, 'CGV Lý Chính Thắng', 1, '3D', 1460, 1100),
(22, 'CGV Vincom Center Bà Triệu', 2, '3D', 1460, 1100),
(23, 'CGV Mipec Tower', 2, '3D', 1460, 1100),
(24, 'CGV Hồ Gươm Plaza', 2, '3D', 1460, 1100),
(25, 'CGV Indochina Plaza Hà Nội', 2, '3D', 1460, 1100),
(26, 'CGV Aeon Long Biên', 2, '3D', 1460, 1100),
(27, 'CGV Vincom Nguyễn Chí Thanh', 2, '3D', 1460, 1100),
(28, 'CGV Rice City', 2, '3D', 1460, 1100),
(29, 'CGV Hà Nội Centerpoint', 2, '3D', 1460, 1100),
(30, 'CGV Vincom Royal City', 2, '3D', 1460, 1100),
(31, 'CGV Vincom Times City', 2, '3D', 1460, 1100),
(32, 'CGV Vincom Long Biên', 2, '3D', 1460, 1100),
(33, 'CGV Mac Plaza (Machinco)', 2, '3D', 1460, 1100),
(34, 'CGV Trương Định Plaza', 2, '3D', 1460, 1100),
(35, 'CGV Tràng Tiền Plaza', 2, '3D', 1460, 1100),
(72, 'CGV Vincom Lạng Sơn', 23, '4D', 1460, 1100),
(74, 'CGV Vincom Quảng Ngãi', 25, '4D', 1460, 1100),
(75, 'CGV Vincom Sóc Trăng', 26, '4D', 1460, 1100),
(76, 'CGV Vincom Sơn La', 27, '4D', 1460, 1100),
(77, 'CGV Vincom Tây Ninh', 28, '4D', 1460, 1100),
(78, 'CGV Vincom Thái Nguyên', 29, '4D', 1460, 1100),
(79, 'CGV GO! Mỹ Tho', 30, '3D', 1460, 1100),
(1, 'CGV Hùng Vương Plaza', 1, '3D', 1460, 1200),
(247, 'CGV Template', 2, 'asd', 1200, 2900);

INSERT INTO "public"."SuatChieu" ("IDPhim", "IDRap", "ThoiDiemBatDau", "ThoiDiemKetThuc", "GiaVe") VALUES
(25, 25, '19:00 15/07/2021', '21:00 15/07/2021', 50000),
(24, 24, '19:00 13/07/2021', '21:00 13/07/2021', 90000),
(23, 23, '19:00 11/07/2021', '21:00 11/07/2021', 90000),
(22, 22, '19:00 16/07/2021', '21:00 16/07/2021', 90000),
(21, 21, '19:00 13/07/2021', '21:45 13/07/2021', 90000),
(20, 20, '19:00 04/07/2021', '21:15 04/07/2021', 90000),
(19, 19, '19:00 02/07/2021', '21:30 02/07/2021', 90000),
(18, 18, '19:00 08/07/2021', '21:00 08/07/2021', 90000),
(17, 17, '19:00 09/07/2021', '21:00 09/07/2021', 90000),
(16, 16, '19:00 01/07/2021', '21:00 01/07/2021', 90000),
(15, 15, '19:00 30/06/2021', '20:30 30/06/2021', 90000),
(14, 14, '19:00 29/06/2021', '20:00 29/06/2021', 90000),
(13, 13, '19:00 23/06/2021', '21:05 23/06/2021', 90000),
(12, 12, '19:00 08/06/2021', '21:10 08/06/2021', 90000),
(11, 11, '19:00 07/06/2021', '21:00 07/06/2021', 90000),
(10, 10, '19:00 12/06/2021', '21:00 12/06/2021', 90000),
(9, 9, '19:00 07/06/2021', '20:16 07/06/2021', 90000),
(8, 8, '19:00 06/06/2021', '20:10 06/06/2021', 90000),
(6, 6, '19:00 03/06/2021', '20:10 03/06/2021', 90000),
(5, 5, '19:00 01/06/2021', '20:45 01/06/2021', 90000),
(4, 4, '19:00 20/06/2021', '20:30 20/06/2021', 90000),
(3, 3, '19:00 19/06/2021', '20:30 19/06/2021', 90000),
(2, 2, '19:00 18/06/2021', '20:30 18/06/2021', 90000),
(1, 2, '2021-07-09 17:21', '17:21 09/07/2021 ', 800000),
(7, 7, '2021-06-05 19:00', '2021-06-05 20:10', 900000);

