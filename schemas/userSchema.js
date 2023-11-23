const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   email: { type: String, required: true },
   role: { type: String, enum: ["admin", "doctor", "patient"] },
});

// Export schema
module.exports = userSchema;
