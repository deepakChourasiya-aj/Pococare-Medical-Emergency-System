const express = require("express");
const { DoctorsProfile } = require("../models/profile.model");
const accessRoute = express.Router();

accessRoute.get("/doctors/access", async (req, res) => {
  try {
    const doctors = await DoctorsProfile.find({});
    console.log(doctors);
    res.send({ msg: "Available doctors", doctors: doctors });
  } catch (error) {
    console.log("error", error);
    res.send({ msg: "Server error", error: error });
  }
});
module.exports = {
  accessRoute,
};
