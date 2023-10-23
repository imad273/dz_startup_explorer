const mongoose = require("mongoose");

const CreateStartupSchema = new mongoose.Schema({
  name: String,
  location: String
}, { collection: 'startups' })

module.exports = mongoose.model("Startup", CreateStartupSchema);