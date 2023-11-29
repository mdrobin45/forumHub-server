const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
   commenterEmail: { type: String, required: true },
   comment: { type: String, required: true },
   reason: { type: String, required: true },
   commentId: { type: mongoose.Types.ObjectId },
});

module.exports = reportSchema;
