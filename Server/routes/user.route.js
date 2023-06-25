const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { User } = require("../models/user.model");
const { register, login } = require("../controller/user.controller");

const userRoute = express.Router();
// register
userRoute.post("/register", register);
// login
userRoute.post("/login", login);

module.exports = {
  userRoute,
};
