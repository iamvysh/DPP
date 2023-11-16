const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    movies: [
      {
        movieName: {
          type: String,
          required: true,
        },
        noOfDays: {
          type: Number,
        },
        rent: {
          type: Number,
        },
        returnDate: {
          type: String, 
        },
      },
    ],
    totalAmount: {
      type: Number,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
