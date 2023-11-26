const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");
const postSchema = require("../schemas/postSchema");
const commentSchema = require("../schemas/commentSchema");
const announcementSchema = require("../schemas/announcementSchema");
const reportSchema = require("../schemas/report");

const UserModel = mongoose.model("Users", userSchema);
const PostModel = mongoose.model("Posts", postSchema);
const CommentModel = mongoose.model("Comments", commentSchema);
const AnnouncementModel = mongoose.model("Announcement", announcementSchema);
const ReportModel = mongoose.model("CommentReports", reportSchema);

// Export model
module.exports = {
   UserModel,
   PostModel,
   CommentModel,
   AnnouncementModel,
   ReportModel,
};
