const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  type: String,
  color: String,
  price: String,
  florist: String,
});

const model = mongoose.model("florist", schema);

module.exports = model;
