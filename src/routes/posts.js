const express = require("express");
const getSinglePost = require("../controllers/posts/getSinglePost");
const addPost = require("../controllers/posts/addPost");
const updatePost = require("../controllers/posts/updatePost");
const deletePost = require("../controllers/posts/deletePost");
const getPosts = require("../controllers/posts/getPosts");
const getPostByUser = require("../controllers/posts/getPostByUser");
const uploadMultiple = require("../controllers/posts/uploadMultiple");
const getPostsByVote = require("../controllers/posts/getPostsByVote");
const searchByTag = require("../controllers/posts/searchByTag");
const upVote = require("../controllers/posts/upvote");
const downVote = require("../controllers/posts/downVote");
const verifyUser = require("../middlewares/verifyUser");
const totalPosts = require("../controllers/posts/totalPosts");
const postRoute = express.Router();

// Get all post
postRoute.get("/", getPosts);

// Search post by tag
postRoute.get("/tag-search", searchByTag);

// Get post by user
postRoute.get("/user", getPostByUser);

postRoute.get("/byVote", getPostsByVote);

// Total posts
postRoute.get("/total", verifyUser(["admin"]), totalPosts);

// Get single post
postRoute.get("/:id", getSinglePost);

// update single post
postRoute.patch("/:id", verifyUser(["member"]), updatePost);

// delete single post
postRoute.delete("/:id", verifyUser(["member"]), deletePost);

// add single post
postRoute.post("/", verifyUser(["member"]), addPost);

// add multiple post
postRoute.post("/multiple", uploadMultiple);

// Update upvote
postRoute.put("/upvote/:id", verifyUser(["member"]), upVote);

// Update downVote
postRoute.put("/downvote/:id", verifyUser(["member"]), downVote);

// Export router
module.exports = postRoute;
