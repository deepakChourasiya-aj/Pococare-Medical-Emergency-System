const express = require("express");
var cookieParser = require("cookie-parser");
const { connection } = require("./configuration/db");
const { userRoute } = require("./routes/user.route");
const { authenticator } = require("./middlewares/authenticator");
const { validRoleAuth } = require("./middlewares/validRoleAuth");
const { slotsRoute } = require("./routes/slots.route");
const { appointmentRoute } = require("./routes/appointment.route");
const cors = require("cors");
const { doctorProfileRoute } = require("./routes/profile.route");
const { accessRoute } = require("./routes/generalAccess.route");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", userRoute);
app.use("/api", accessRoute);
app.use(authenticator);
app.use("/api", doctorProfileRoute);
app.use("/api", slotsRoute);
app.use("/api", appointmentRoute);

app.get(
  "/",
  authenticator,
  validRoleAuth(["patient", "doctor"]),
  (req, res) => {
    res.send("welcome world");
  }
);

const PORT = process.env.port;
app.listen(PORT || 9000, async () => {
  try {
    await connection;
    console.log(`connected at http://localhost:${process.env.port}`);
  } catch (error) {
    console.log(error.message, "error connecting");
  }
});
