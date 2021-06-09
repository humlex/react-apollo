const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  genre: String,
  directorId: Schema.Types.ObjectId,
});

module.exports = mongoose.model("Movie", movieSchema);
