const express = require("express");
const getSinglePost = require("../controllers/posts/getSinglePost");
const addPost = require("../controllers/posts/addPost");
const updatePost = require("../controllers/posts/updatePost");
const deletePost = require("../controllers/posts/deletePost");
const getPosts = require("../controllers/posts/getPosts");
const getPostByUser = require("../controllers/posts/getPostByUser");
const uploadMultiple = require("../controllers/posts/uploadMultiple");
const getPostsByVote = require("../controllers/posts/getPostsByVote");
const postRoute = express.Router();

// Get all post
postRoute.get("/", getPosts);

// Get post by user
postRoute.get("/user", getPostByUser);

postRoute.get("/byVote", getPostsByVote);

// Get single post
postRoute.get("/:id", getSinglePost);

// update single post
postRoute.patch("/:id", updatePost);

// delete single post
postRoute.delete("/:id", deletePost);

// add single post
postRoute.post("/", addPost);

// add single post
postRoute.post("/multiple", uploadMultiple);

// Export router
module.exports = postRoute;
