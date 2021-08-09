const { QueryTypes } = require("sequelize");
const db = require("../models/db");
const Ticket = require("../models/ticket");


exports.getLichSuDatVe = async (req, res, next) => {
  
  var sql =
    'SELECT  a."ID", d."Ten" as "TenRap", c."Ten" as "TenPhim", b."ThoiDiemBatDau", a."TongTien" from "DatCho" a join "SuatChieu" b on a."IDSuatChieu" = b."IDSuatChieu" join "Phim" c on b."IDPhim" = c."ID" join "Rap" d on b."IDRap" = d."ID" where a."IDNguoiDung" = ' +
    String(req.session.userId) + 'ORDER BY a."ID" ASC';
  const ticketBooked = await db.query(sql, { type: QueryTypes.SELECT });
 
  for (let i = 0; i < ticketBooked.length; i++) {
    const seats = await Ticket.findAll({
      attributes: ['MaGhe'],
      where: {IDDatCho: ticketBooked[i].ID}
    });
    seatList = [];
    for (let j = 0; j < seats.length; j++) {
      seatList.push(seats[j].MaGhe);
    }

    ticketBooked[i]["seats"] = seatList.join(", ");
  }
  console.log(ticketBooked);
  res.render("lichsumuave", {
    isAuthenticated: req.session.userId, ticketBooked: ticketBooked,
  });
};


