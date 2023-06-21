const mongoose = require("mongoose");

// Define the schema for slots
const slotSchema = new mongoose.Schema(
  {
    doctorId: {
      type: String,
      required: true,
    },
    availableSlots: [
      {
        startTime: String,
        endTime: String,
        status: {
          type: Boolean,
          default: false
        },
      },
    ],
  },
  { versionKey: "version" }
);

// Create the model for slots
const Slots = mongoose.model("Slots", slotSchema);

module.exports = { Slots };
