const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
   commenterEmail: { type: String, required: true },
   comment: { type: String, required: true },
   reason: { type: String, required: true },
});

module.exports = reportSchema;
