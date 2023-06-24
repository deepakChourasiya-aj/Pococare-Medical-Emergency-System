const express = require("express");
const { generalAccess } = require("../controller/generalAccess.controller");
const accessRoute = express.Router();

accessRoute.get("/doctors/access", generalAccess);
module.exports = {
  accessRoute,
};
