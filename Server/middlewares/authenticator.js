const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authenticator = (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization 
    if(token==undefined){
      return  res.send({ msg: "Please Login first" });
    }
    if (token) {
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
         req.body.userID = decoded.userID;
         req.body.role = decoded.role;
        next();
      } else {
        return res.send({ msg: "Invalid token" });
      }
    }
  } catch (error) {
   return  res.send({ msg: "Please Login first" });
  }
};
module.exports = {
  authenticator
};