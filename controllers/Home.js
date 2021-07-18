const User = require("../models/User");
const Email = require("../models/email");
const randomString = require("random-base64-string");
const express = require("express");
const asyncHandler = require("express-async-handler");

exports.getHomePage = async (req, res, next) => {
  res.render("layouts/index", {});
};

exports.getRegister = async (req, res, next) => {
  res.render("register");
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
      res.render("user/register");
    } else {
      error = "Can not register . Try again";
      res.render("user/register");
    }
  }
};

exports.verifyUser = asyncHandler(async function (req, res) {
  const { userId } = req.query;
  User.resetCode(userId);
  req.session.userId = userId;
  res.redirect("/cum-rap");
});

exports.getLogin = async (req, res, next) => {
  res.render("login");
};

exports.postLogin = asyncHandler(async function (req, res) {
  const { email, password } = req.body;
  const found = await User.findByEmail(email);
  console.log(found);
  if (found && found.MatKhau === password && found.Code == null) {
    req.session.userId = found.id;
    res.redirect("/cum-rap");
  } else {
    res.render("login");
  };
});
