const express = require("express");
const { validRoleAuth } = require("../middlewares/validRoleAuth");
const {
  openSlots,
  updateSlotTiming,
  deleteSlot,
} = require("../controller/slots.controller");

const slotsRoute = express.Router();

// Endpoint to open slots
slotsRoute.post("/slt", validRoleAuth(["doctor"]), openSlots);

// Endpoint to open slots SlotTiming
slotsRoute.patch("/slt/:slotId", validRoleAuth(["doctor"]), updateSlotTiming);

// Endpoint to open slots deleteSlot
slotsRoute.delete("/slt/:slotId", validRoleAuth(["doctor"]), deleteSlot);

module.exports = {
  slotsRoute,
};
