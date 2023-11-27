const express = require("express");
const getComments = require("../controllers/comments/getComments");
const addComment = require("../controllers/comments/addComment");
const addMultipleComment = require("../controllers/comments/addMultiple");
const commentCount = require("../controllers/comments/countComments");
const verifyUser = require("../middlewares/verifyUser");
const getCommentsByPost = require("../controllers/comments/getCommentsByPost");
const reportComment = require("../controllers/comments/report");
const getReportedComments = require("../controllers/comments/getReportedComments");
const commentRoute = express.Router();

// Get all comment
commentRoute.get("/", getComments);

// Get comment by post
commentRoute.get("/post", getCommentsByPost);

// Count post comments
commentRoute.get("/count", commentCount);

// Report comment
commentRoute.post("/report", reportComment);

// get reported comments
commentRoute.get("/report/all", getReportedComments);

// Add comment
commentRoute.post("/", verifyUser([]), addComment);

// add multiple
commentRoute.post("/multiple", addMultipleComment);
// Export routes
module.exports = commentRoute;
