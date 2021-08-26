const User = require("../models/User");
const Email = require("../models/email");
const randomString = require("random-base64-string");
const express = require("express");
const asyncHandler = require("express-async-handler");
const Movies = require("../models/movie");
const { Op } = require("sequelize");
const db = require("../models/db");
const { QueryTypes } = require("sequelize");
const { use } = require("../routers/Homepage");

exports.getHomePage = asyncHandler(async (req, res, next) => {
  const nowShowing = await Movies.findAll({
    limit: 10,
    order: [["ID", "ASC"]],
  });
  var sql = 'SELECT SUM("foo"."SLDat") as "SoLuong", "foo"."Ten", "foo"."Poster" from (SELECT COUNT("DatCho"."IDSuatChieu") AS "SLDat", "Phim"."Ten", "Phim"."Poster" FROM "DatCho", "SuatChieu", "Phim" WHERE "DatCho"."IDSuatChieu" = "SuatChieu"."IDSuatChieu" AND "SuatChieu"."IDPhim" = "Phim"."ID" GROUP BY "DatCho"."IDSuatChieu", "Phim"."Ten", "Phim"."Poster" ORDER BY COUNT("DatCho"."IDSuatChieu") DESC ) AS "foo" GROUP BY "foo"."Ten", "foo"."Poster" ORDER BY "SoLuong" DESC'
  const topMovie = await db.query(sql, { type: QueryTypes.SELECT });

  res.render("home", {
    isAuthenticated: req.session.userId,
    nowShowing: nowShowing,
    topMovie: topMovie,
  });
});

exports.getRegister = async (req, res, next) => {
  res.render("register", { isAuthenticated: req.session.userId });
};

exports.postRegister = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password != confirmPassword) {
    res.send("Those passwords didn’t match. Try again");
  } else {
    const code = randomString(4);
    const found = await User.register(email, password, name, code);

    if (found) {
      const context =
        "To register click here: localhost:3000/send?code=" +
        code +
        "&userId=" +
        found.id;
      Email.send(email, "Register", context);
      res.render("register", { isAuthenticated: req.session.userId });
    } else {
      error = "Can not register . Try again";
      res.render("register", { isAuthenticated: req.session.userId });
    }
  }
};

exports.verifyUser = asyncHandler(async function (req, res) {
  const { userId } = req.query;
  User.resetCode(userId);
  req.session.userId = userId;
  res.redirect("/");
});

exports.getLogin = async (req, res, next) => {
  res.render("login", { isAuthenticated: req.session.userId });
};

exports.postLogin = asyncHandler(async function (req, res) {
  const { email, password } = req.body;
  const found = await User.findByEmail(email);

  if (found && found.MatKhau === password && found.Code == null) {
    req.session.userId = found.id;

    res.redirect("/");
  } else {
    res.render("login", { isAuthenticated: req.session.userId });
  }
});

exports.logout = (req, res) => {
  delete req.session.userId;
  res.redirect("/");
};

exports.getForgetPassword = async (req, res, next) => {
  res.render("forgetPassword", { isAuthenticated: req.session.userId });
};

exports.postForgetPassword = async (req, res, next) => {
  const { email } = req.body;
  const code = randomString(6);
  req.session.Code = code;
  console.log(req.session.Code);
  const found = await User.findByEmail(email);
  if (found) {
    const context =
      "To change your password, please click here: localhost:3000/change-password?code=" +
      code +
      "&userId=" +
      found.id;
    Email.send(email, "Change Password", context);
    res.redirect("/forget-password");
  } else {
    alert("Email not found");
  }
};

exports.getChangePassword = async (req, res, next) => {
  const userId  = req.query.userId;
  req.session.Code = userId;
  res.render("changePassword", { isAuthenticated: req.session.userId });
}

exports.postChangePassword = async (req, res, next) => {
  console.log(req.session.Code);
  const { password } = req.body;
  console.log(password);
  User.changePassword(req.session.Code, password);
  res.render("login", { isAuthenticated: req.session.userId })
}
