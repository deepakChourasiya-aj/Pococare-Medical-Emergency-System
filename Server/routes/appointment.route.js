const express = require("express");
const { User } = require("../models/user.model");
const { AppointmentModel } = require("../models/appointment");
const appointmentRoute = express.Router();


appointmentRoute.post("/apt", async (req, res) => {
  try {

  } catch (error) {

  }
});

module.exports = {
  appointmentRoute,
};
