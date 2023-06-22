const { User } = require("../models/user.model");
const { AppointmentModel } = require("../models/appointment");
const { Slots } = require("../models/slots");

// Book Appointment Route
const bookAppointment = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const slotId = req.params.slotId;
    let patientId = req.body.userID;
    const {
      appointmentType,
      patientName,
      ageOfPatient,
      gender,
      problemDescription,
      address,
      appointmentDate,
      time,
    } = req.body;

    // Retrieve doctor's information
    const doctor = await User.findOne({ _id: doctorId });
    const doctorName = doctor.firstName + " " + doctor.lastName;

    // Find the updated slot
    const updatedSlot = await Slots.findOne({ doctorId });

    let findSlot = false;

    // Iterate through the available slots to check the status
    for (let i = 0; i < updatedSlot.availableSlots.length; i++) {
      if (updatedSlot.availableSlots[i]._id == slotId) {
        if (updatedSlot.availableSlots[i].status === true) {
          findSlot = true;
          break;
        }
        if (updatedSlot.availableSlots[i].status === false) {
          break;
        }
      }
    }

    if (findSlot == false) {
      // Create a new appointment
      const bookApp = new AppointmentModel({
        patientId,
        doctorId,
        slotId,
        appointmentType,
        patientName,
        doctorName,
        ageOfPatient,
        gender,
        problemDescription,
        address,
        appointmentDate,
        time,
      });

      // Save the appointment
      await bookApp.save();

      // Update slot status to true
      const updatedSlot = await Slots.findOneAndUpdate(
        { "availableSlots._id": slotId },
        { $set: { "availableSlots.$.status": true } },
        { new: true }
      );

      if (updatedSlot && bookApp) {
        return res.send({
          msg: "Appointment detailed  submitted successfully make a payment",
          bookApp: bookApp,
        });
      }
    }

    if (findSlot.status == true) {
      return res.send({ msg: "This slot is already booked" });
    }

    res.send({ msg: "This slot is already booked" });
  } catch (error) {
    console.log("error in appointment booking: " + error);
    res.send({ msg: "Server error in appointment booking" });
  }
};

// Cancel Appointment Route
const cancelAppointment = async (req, res) => {
  try {
    let patientId = req.body.userID;
    const checkAppointment = await AppointmentModel.findOne({ patientId });

    if (checkAppointment) {
      const id = checkAppointment._id;
      const slotId = checkAppointment.slotId;

      // Delete the appointment
      const cancelAppointment = await AppointmentModel.findByIdAndDelete({
        _id: id,
      });

      if (cancelAppointment) {
        // Update slot status to true
        const updatedSlot = await Slots.findOneAndUpdate(
          { "availableSlots._id": slotId },
          { $set: { "availableSlots.$.status": false } },
          { new: true }
        );
        return res.send({
          msg: "Appointment cancelled",
          cancelAppointment: cancelAppointment,
        });
      }
    } else {
      return res.send({ msg: "Appointment not found" });
    }
  } catch (error) {
    console.log("error in appointment booking: " + error);
    res.send({ msg: "Server error in appointment booking" });
  }
};

module.exports = {
  bookAppointment,
  cancelAppointment,
};
