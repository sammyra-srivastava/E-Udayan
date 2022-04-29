const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  color: String,
  price_per_kg: Number,
  price_per_unit: Number,
  
});

const model = mongoose.model("flowers", schema);

module.exports = model;