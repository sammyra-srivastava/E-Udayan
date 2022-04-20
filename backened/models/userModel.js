const mongoose = require("../connection");

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: String,
  email: String,
  password: String,
  
});

const model = mongoose.model("users", schema);

module.exports = model;