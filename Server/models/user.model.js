const mongoose = require("mongoose");

/**
 * Defines the schema for a user object.
 */
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: { type: String, unique: true, required: true },
    mobile: {
      type: String,
      unique: true,
      minlength: 10,
      maxlength: 10,
    },
    password: { type: String, required: true },
    role: { type: String, enum: ["patient", "doctor"], default: "patient" }
  },
  { versionKey: "version" }
);

/**
 * Represents a user in the database.
 */
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
