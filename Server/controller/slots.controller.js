const { Slots } = require("../models/slots");

// Open Slots Route
const openSlots = async (req, res) => {
  try {
    const doctorId = req.body.userID;
    const { startTime, endTime } = req.body;

    // Check if slots are already available for the doctor
    const isAvailable = await Slots.findOne({ doctorId: doctorId });

    if (!isAvailable) {
      // If no slots are available, create a new Slots document with the provided startTime and endTime
      const openSlot = new Slots({
        doctorId: doctorId,
        availableSlots: [
          {
            startTime: startTime,
            endTime: endTime,
          },
        ],
      });

      // Save the new Slots document
      isAvailable = await openSlot.save();

      return res.send({ msg: "Slots opened successfully", openSlot: openSlot });
    }

    // If slots are already available, add the new slot with the provided startTime and endTime
    isAvailable.availableSlots.push({
      startTime: startTime,
      endTime: endTime,
    });

    // Save the updated Slots document
    await isAvailable.save();

    return res.send({
      msg: "New slot added successfully",
      newSlot: isAvailable,
    });
  } catch (error) {
    res.send({ msg: "Server error", error: error });
    console.log(error);
  }
};
// Update slot timing
const updateSlotTiming = async (req, res) => {
  try {
    const doctorId = req.body.userID;
    const slotId = req.params.slotId;
    const { startTime, endTime } = req.body;

    const updatedSlot = await Slots.findOneAndUpdate(
      { doctorId: doctorId, "availableSlots._id": slotId },
      {
        $set: {
          "availableSlots.$.startTime": startTime,
          "availableSlots.$.endTime": endTime,
        },
      },
      { new: true }
    );

    if (updatedSlot) {
      return res.send({
        msg: "Slot timing updated successfully",
        updatedSlot: updatedSlot,
      });
    } else {
      return res.send({ msg: "Slot not found" });
    }
  } catch (error) {
    res.send({ msg: "Server error", error: error });
    console.log(error);
  }
};

// Delete specific slot
const deleteSlot = async (req, res) => {
  try {
    const doctorId = req.body.userID;
    const slotId = req.params.slotId;

    const updatedSlot = await Slots.findOneAndUpdate(
      { doctorId: doctorId },
      { $pull: { availableSlots: { _id: slotId } } },
      { new: true }
    );

    if (updatedSlot) {
      return res.send({
        msg: "Slot deleted successfully",
        updatedSlot: updatedSlot,
      });
    } else {
      return res.send({ msg: "Slot not found" });
    }
  } catch (error) {
    res.send({ msg: "Server error", error: error });
    console.log(error);
  }
};

module.exports = {
  openSlots,
  updateSlotTiming,
  deleteSlot,
};
