const express = require("express");
const getSinglePost = require("../controllers/posts/getSinglePost");
const addPost = require("../controllers/posts/addPost");
const updatePost = require("../controllers/posts/updatePost");
const deletePost = require("../controllers/posts/deletePost");
const getPosts = require("../controllers/posts/getPosts");
const postRoute = express.Router();

// Get single post
postRoute.get("/:id", getSinglePost);

// Get all post
postRoute.get("/", getPosts);

// update single post
postRoute.put("/:id", updatePost);

// delete single post
postRoute.delete("/:id", deletePost);

// add single post
postRoute.post("/", addPost);

// Export router
module.exports = postRoute;
