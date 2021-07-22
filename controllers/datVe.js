const ShowTime = require("../models/showtime");
const Movie = require("../models/movie");
const Booking = require("../models/booking");
const Ticket = require("../models/ticket");
const { QueryTypes } = require("sequelize");
const db = require("../models/db");

const alphabet = "abcdefg";
const SEATS_ROWS = 7;
const SEATS_COLUMNS = 14;

exports.getDatVe = async (req, res, next) => {
  const idMovie = req.query.phim;
  const idCinema = req.query.rap;

  // if (!req.session.userId) {
  //   res.redirect("/login");
  // }

  const movie = await Movie.findOne({
    where: { ID: idMovie },
  });

  const showTimeList = await ShowTime.findAll({
    where: { IDRap: idCinema, IDPhim: idMovie },
  });

  var sql =
    'select "Ve"."MaGhe" from "Ve" join "DatCho" on "Ve"."IDDatCho" = "DatCho"."ID" where "DatCho"."IDSuatChieu" = ' +
    String(showTimeList[0].IDSuatChieu);
  const seatBooked = await db.query(sql, { type: QueryTypes.SELECT });
  console.log(seatBooked);

  const seats = [];

  for (let x = 0; x < SEATS_ROWS; x++) {
    const row = alphabet[x].toUpperCase();
    for (let y = 0; y < SEATS_COLUMNS; y++) {
      const dict = {};
      dict["code"] = row + (y + 1).toString();
      dict["isAvailable"] = true;
      for (let i = 0; i < seatBooked.length; i++) {
          if (dict["code"] == seatBooked[i].MaGhe) {
            dict["isAvailable"] = false;
            break;
          } 
      }
      seats.push(dict);
    }
  }
  
  res.render("datve", {
    isAuthenticated: req.session.userId,
    showTimeList: showTimeList,
    movieName: movie.Ten,
    seats: seats,
  });
};

exports.postDatVe = async (req, res, next) => {
  const idMovie = req.query.phim;
  const idCinema = req.query.rap;
  const thoiDiemBatDau = req.body.selected_showtime;
  const bookingTicket = req.body.seats;

  const showTime = await ShowTime.findOne({
    where: { IDPhim: idMovie, IDRap: idCinema, ThoiDiemBatDau: thoiDiemBatDau },
  });

  const booking = await Booking.create({
    IDNguoiDung: req.session.userId,
    IDSuatChieu: showTime.IDSuatChieu,
    TongTien: req.body.totalPrice,
  });

  for (let seatCode of bookingTicket) {
    await Ticket.create({
      IDDatCho: booking.ID,
      MaGhe: seatCode,
      GiaTien: showTime.GiaVe,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  }
  const seats = [];
  var sql =
    'select "Ve"."MaGhe" from "Ve" join "DatCho" on "Ve"."IDDatCho" = "DatCho"."ID" where "DatCho"."IDSuatChieu" = ' +
    String(showTime.IDSuatChieu);
  const seatBooked = await db.query(sql, { type: QueryTypes.SELECT });

  for (let x = 0; x < SEATS_ROWS; x++) {
    const row = alphabet[x].toUpperCase();
    for (let y = 0; y < SEATS_COLUMNS; y++) {
      const dict = {};
      dict["code"] = row + (y + 1).toString();
      dict["isAvailable"] = true;
      for (let i = 0; i < seatBooked.length; i++) {
          if (dict["code"] == seatBooked[i].MaGhe) {
            dict["isAvailable"] = false;
            break;
          } 
      }
      seats.push(dict);
    }
  }
  
  return res.send(seats);
};

exports.postSeats = async (req, res, next) => {
  const selected = req.body.selected_showtime;
  const idMovie = req.body.idMovie;
  const idCinema = req.body.idCinema;
  
  const showTime = await ShowTime.findOne({
    where: { IDRap: idCinema, IDPhim: idMovie, ThoiDiemBatDau: selected },
  });

  var sql =
    'select "Ve"."MaGhe" from "Ve" join "DatCho" on "Ve"."IDDatCho" = "DatCho"."ID" where "DatCho"."IDSuatChieu" = ' +
    String(showTime.IDSuatChieu);
  const seatBooked = await db.query(sql, { type: QueryTypes.SELECT });

  const seats = [];

  for (let x = 0; x < SEATS_ROWS; x++) {
    const row = alphabet[x].toUpperCase();
    for (let y = 0; y < SEATS_COLUMNS; y++) {
      const dict = {};
      dict["code"] = row + (y + 1).toString();
      dict["isAvailable"] = true;
      for (let i = 0; i < seatBooked.length; i++) {
          if (dict["code"] == seatBooked[i].MaGhe) {
            dict["isAvailable"] = false;
            break;
          } 
      }
      seats.push(dict);
    }
  }
  
  return res.send(seats);
};
