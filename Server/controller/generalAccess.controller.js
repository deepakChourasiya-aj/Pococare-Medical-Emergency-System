const { DoctorsProfile } = require("../models/profile.model");

const generalAccess = async (req, res) => {
  try {
    const doctors = await DoctorsProfile.find({});
    console.log(doctors);
    res.send({ msg: "Available doctors", doctors: doctors });
  } catch (e) {
    console.log("error", e);
    res.send({ msg: "Server error", error: e.message });
  }
};

module.exports = {
  generalAccess,
};
