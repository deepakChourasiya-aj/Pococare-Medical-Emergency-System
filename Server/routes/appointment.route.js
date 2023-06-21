const express = require("express");

const { validRoleAuth } = require("../middlewares/validRoleAuth");
const {
  cancelAppointment,
  bookAppointment,
} = require("../controller/appointment.controller");
const appointmentRoute = express.Router();

appointmentRoute.post(
  "/apt/:doctorId/:slotId",
  validRoleAuth(["patient"]),
  bookAppointment
);
appointmentRoute.delete("/apt", validRoleAuth(["patient"]), cancelAppointment);

module.exports = {
  appointmentRoute,
};
