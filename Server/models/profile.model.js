const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    doctorId: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    setfees: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: "version",
  }
);

const DoctorsProfile = mongoose.model("DoctorsProfile", profileSchema);

module.exports = {
  DoctorsProfile,
};
