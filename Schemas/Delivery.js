const mongoose = require("mongoose");

const DeliverSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
});

const Delivery = mongoose.model("Delivery", DeliverSchema);
module.exports = Delivery;
