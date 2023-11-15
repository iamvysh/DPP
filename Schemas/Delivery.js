const mongoose = require("mongoose");

const DeliverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  movies: [
    {
      movieName: {
        type: String,
      },
      noOfDays: {
        type: Number,
      },
      rent: {
        type: Number,
      },
    },
  ],
  totalAmount:{
    type:Number
  }
});

const Delivery = mongoose.model("Delivery", DeliverSchema);
module.exports = Delivery;
