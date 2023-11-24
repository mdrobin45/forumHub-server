const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   image: { type: String, required: true },
   isPremiumMember: { type: Boolean, required: true },
   role: { type: String, enum: ["admin", "member"] },
});

// Export schema
module.exports = userSchema;
