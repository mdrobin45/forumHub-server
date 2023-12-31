const express = require("express");
const getComments = require("../controllers/comments/getComments");
const addComment = require("../controllers/comments/addComment");
const addMultipleComment = require("../controllers/comments/addMultiple");
const commentCount = require("../controllers/comments/countComments");
const deleteComment = require("../controllers/comments/deleteComment");
const verifyUser = require("../middlewares/verifyUser");
const getCommentsByPost = require("../controllers/comments/getCommentsByPost");
const reportComment = require("../controllers/comments/report");
const getReportedComments = require("../controllers/comments/getReportedComments");
const totalComments = require("../controllers/comments/totalComments");
const deleteReportComment = require("../controllers/comments/deleteReportComment");
const commentRoute = express.Router();

// Get all comment
commentRoute.get("/", getComments);

// Get comment by post
commentRoute.get("/post", verifyUser(["member"]), getCommentsByPost);

// Count post comments
commentRoute.get("/count", commentCount);

// total comments
commentRoute.get("/total", verifyUser(["admin"]), totalComments);

// Report comment
commentRoute.post("/report", verifyUser(["member"]), reportComment);

// delete report comment
commentRoute.delete("/report/:id", verifyUser(["admin"]), deleteReportComment);

// get reported comments
commentRoute.get("/report/all", verifyUser(["admin"]), getReportedComments);

// Add comment
commentRoute.post("/", verifyUser(["member"]), addComment);

// add multiple
commentRoute.post("/multiple", addMultipleComment);

// Delete comment
commentRoute.delete("/:id", verifyUser(["admin"]), deleteComment);

// Export routes
module.exports = commentRoute;
