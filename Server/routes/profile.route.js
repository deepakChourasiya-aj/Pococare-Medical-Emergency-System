const { cloudinary } = require("../configuration/cloudinary");
const { validRoleAuth } = require("../middlewares/validRoleAuth");
const { DoctorsProfile } = require("../models/profile.model");
const { User } = require("../models/user.model");
const { upload } = require("./saveToCloud");
const multer = require("multer");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const { Slots } = require("../models/slots");
const {
  createProfile,
  getProfileData,
  allDoctors,
} = require("../controller/profile.controller");

const doctorProfileRoute = express.Router();

doctorProfileRoute.post(
  "/profile",
  validRoleAuth(["doctor"]),
  upload.single("image"),
  createProfile
);
doctorProfileRoute.get("/doctor/:doctorId", getProfileData);

doctorProfileRoute.get("/alldoctors", allDoctors);

module.exports = {
  doctorProfileRoute,
};
