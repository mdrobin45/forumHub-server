const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");

const UserModel = mongoose.model("Users", userSchema);

// Export model
module.exports = { UserModel };
