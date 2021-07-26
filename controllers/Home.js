const User = require("../models/User");
const Email = require("../models/email");
const randomString = require("random-base64-string");
const express = require("express");
const asyncHandler = require("express-async-handler");
const Movies = require("../models/movie");
const { Op } = require("sequelize");
const { format, addMonths } = require("date-fns");

exports.getHomePage = async (req, res, next) => {
  const nowShowing = await Movies.findAll({
    limit: 10,
    order: [["ID", "ASC"]],
  });
  const comingSoon = await Movies.findAll({
    limit: 10,
    order: [["ID", "DESC"]],
  });

  res.render("home", {
    isAuthenticated: req.session.userId,
    nowShowing: nowShowing,
    comingSoon: comingSoon,
  });
};

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
