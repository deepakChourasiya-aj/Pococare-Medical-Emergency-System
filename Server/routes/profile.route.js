const { cloudinary } = require("../configuration/cloudinary");
const { validRoleAuth } = require("../middlewares/validRoleAuth");
const { DoctorsProfile } = require("../models/profile.model");
const { User } = require("../models/user.model");
const { upload } = require("./saveToCloud");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const doctorProfileRoute = express.Router();

doctorProfileRoute.post(
  "/profile",
  validRoleAuth(["doctor"]),
  upload.single("image"),
  async (req, res) => {
    await cloudinary.uploader.upload(
      req.file.path,
      async function (err, result) {
        if (err) {
          console.log(err);
          return res.send({ msg: "error uploading" });
        }
        const token = req.headers.authorization || req.cookies.token;
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        const checkIsPresent = await User.findOne({ _id: decoded.userID });
        console.log(checkIsPresent);
        if (!checkIsPresent) {
          return res.send({ msg: "User not found" });
        }
        const {
          doctorName,
          qualifications,
          experience,
          setfees,
          city,
          status,
          isAvailable,
        } = req.body;
        let doctor = new DoctorsProfile({
          doctorId: checkIsPresent._id,
          image: result.url,
          doctorName,
          qualifications,
          experience,
          setfees,
          city,
          status,
          isAvailable,
        });
        let saved = await doctor.save();
        if (saved) {
          return res
            .status(201)
            .send({ msg: "Doctor has been created", saved, result });
        } else {
          return res
            .status(500)
            .send({ msg: "Server error try after sometime" });
        }
      }
    );
  }
);

module.exports = {
  doctorProfileRoute,
};
