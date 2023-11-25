const express = require("express");
const getComments = require("../controllers/comments/getComments");
const getCommentsByUser = require("../controllers/comments/getCommentsByUser");
const addComment = require("../controllers/comments/addComment");
const addMultipleComment = require("../controllers/comments/addMultiple");
const commentCount = require("../controllers/comments/countComments");
const verifyToken = require("../middlewares/verifyUser");
const verifyUser = require("../middlewares/verifyUser");
const commentRoute = express.Router();

// Get all comment
commentRoute.get("/", getComments);

// Get comment by user
commentRoute.get("/user", getCommentsByUser);

// Count post comments
commentRoute.get("/count", commentCount);

// Add comment
commentRoute.post("/", verifyUser([]), addComment);

// add multiple
commentRoute.post("/multiple", addMultipleComment);
// Export routes
module.exports = commentRoute;
