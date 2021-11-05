const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TWEETSschema = new mongoose.Schema({
  text: String,
  owner: {
    type: String,
    required: true,
  },
  createdAt: Date,
});

var TWEETS = mongoose.model("Tweet", TWEETSschema);

module.exports = TWEETS;
