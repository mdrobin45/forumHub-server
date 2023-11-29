const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   image: { type: String, required: true },
   isPremiumMember: { type: Boolean, required: true },
   isBlock: { type: Boolean, default: false },
   role: { type: String, enum: ["admin", "member"] },
   bio: { type: String },
});

// Export schema
module.exports = userSchema;
