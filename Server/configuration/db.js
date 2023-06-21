// Load environment variables from .env 
const mongoose = require("mongoose"); 
require('dotenv').config();

// Connect to the MongoDB database
const connection = mongoose.connect(process.env.mongoURL)
  .then(() => {
    console.log("Connected to the MongoDB database");
  })
  .catch((error) => {
    console.log('Connection error:', error);
  });

module.exports = {
  connection
};