const mongoose = require("mongoose");

const announcementSchema = mongoose.Schema({
   authorName: { type: String, required: true },
   authorImage: { type: String, required: true },
   title: { type: String, required: true },
   description: { type: String, required: true },
   ago: { type: String, required: true },
   voice: { type: Number, default: 0 },
   replies: { type: Number, default: 0 },
});

module.exports = announcementSchema;
