const express = require("express");
const cookieParser = require("cookie-parser");
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

app.use("/api", userRoute); // Mounts user route at /api
app.use("/api", accessRoute); // Mounts access route at /api
app.use(authenticator); // Authenticates all routes below this middleware
app.use("/api", doctorProfileRoute); // Mounts doctor profile route at /api
app.use("/api", slotsRoute); // Mounts slots route at /api
app.use("/api", appointmentRoute); // Mounts appointment route at /api

app.get(
  "/",
  authenticator, // Authenticates the route
  validRoleAuth(["patient", "doctor"]), // Validates the role of the user
  (req, res) => {
    res.send("Welcome, world!"); // Sends a welcome message
  }
);

// Retrieves the port from environment variables or uses 9000 as a fallback
const PORT = process.env.port || 9000; 
app.listen(PORT, async () => {
  try {
    await connection; 
    console.log(`Connected at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error connecting:", error.message); 
  }
});
