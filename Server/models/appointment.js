const mongoose = require("mongoose");

// Define the schema for appointments
const appointmentSchema = mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    doctorId: {
      type: String,
      required: true,
    },
    slotId:{
        type: String,
        required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
    ageOfPatient: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    problemDescription: {
      type: String,
      required: true,
    },
    address: {
      type: String
    },
    status: {
      type: Boolean,
      default: false,
    },
    paymentStatus: {
      type: Boolean,
      default: false,
    },
    appointmentDate: {
      type: String,
      required: true,
    },
    time:{
        type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: "version" } 
);

// Create the model for appointments
const AppointmentModel = mongoose.model("Appointment", appointmentSchema);

module.exports = {
  AppointmentModel,
};
