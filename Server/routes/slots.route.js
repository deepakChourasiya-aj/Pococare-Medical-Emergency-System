const express = require("express");
const { User } = require("../models/user.model");
const { AppointmentModel } = require("../models/appointment");
const { Slots } = require("../models/slots");
const { validRoleAuth } = require("../middlewares/validRoleAuth");
const slotsRoute = express.Router();

slotsRoute.post("/slt", validRoleAuth(["doctor"]), async (req, res) => {
  try {
    
  } catch (error) {}
});

module.exports = {
  slotsRoute,
};
