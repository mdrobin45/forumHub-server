const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
   title: { type: String, required: true },
   description: { type: String, required: true },
   tag: { type: String },
   postTime: { type: String, required: true },
   upVote: { type: Number, default: 0 },
   downVote: { type: Number, default: 0 },
   author: { type: mongoose.Types.ObjectId, ref: "Users" },
});

module.exports = postSchema;
