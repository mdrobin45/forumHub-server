const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
   title: { type: String, required: true },
   description: { type: String, required: true },
   tags: { type: Array, required: true },
   postTime: { type: String, required: true },
   upVote: { type: Number, default: 0 },
   downVote: { type: Number, default: 0 },
   email: { type: String },
});

module.exports = postSchema;
