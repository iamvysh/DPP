const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
  Moviename: {
    type: String,
    required: true,
    // unique: true,
  },
  
  Rentprice:{
    type:Number,
    required:true,
  }
  
});

const Movies = mongoose.model("Movies", MoviesSchema);
module.exports = Movies;