// src/models/Person.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Person", personSchema);
