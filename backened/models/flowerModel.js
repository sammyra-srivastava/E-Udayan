const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  type: String,
  color: String,
  price: String,
  image: String,
});

const model = mongoose.model("flowers", schema);

module.exports = model;
