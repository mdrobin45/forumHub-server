const mongoose = require("mongoose");

const announcementSchema = mongoose.Schema({
   authorName: { type: String, required: true },
   image: { type: String, required: true },
   title: { type: String, required: true },
   description: { type: String, required: true },
   status: { type: String },
   ago: { type: String },
});

module.exports = announcementSchema;
