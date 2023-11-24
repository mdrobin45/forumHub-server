const express = require("express");
const getComments = require("../controllers/comments/getComments");
const getCommentsByUser = require("../controllers/comments/getCommentsByUser");
const addComment = require("../controllers/comments/addComment");
const commentRoute = express.Router();

// Get all comment
commentRoute.get("/", getComments);

// Get comment by user
commentRoute.get("/user", getCommentsByUser);

// Add comment
commentRoute.post("/", addComment);

// Export routes
module.exports = commentRoute;
