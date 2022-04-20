const mongoose = require("../connection");

const schema = new mongoose.Schema({
  shopName: String,
  timings: String,
  mobile: String,
  email: String,
  address: String,
  flowers: Array,
});

const model = mongoose.model("florist", schema);

module.exports = model;  