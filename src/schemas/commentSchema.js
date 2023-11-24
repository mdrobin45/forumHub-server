const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
   commenterEmail: { type: String, required: true },
   text: { type: String, required: true },
   dateTime: { type: String, required: true },
   post: { type: mongoose.Types.ObjectId, ref: "Posts" },
});

module.exports = commentSchema;
