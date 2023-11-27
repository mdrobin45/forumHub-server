const express = require("express");
const getAllTags = require("../controllers/tags/getAllTags");
const addTag = require("../controllers/tags/addTag");
const tagRoute = express.Router();

// Get all tags
tagRoute.get("/", getAllTags);

// Add tag
tagRoute.post("/", addTag);

// Export route
module.exports = tagRoute;
