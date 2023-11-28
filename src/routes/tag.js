const express = require("express");
const getAllTags = require("../controllers/tags/getAllTags");
const addTag = require("../controllers/tags/addTag");
const verifyUser = require("../middlewares/verifyUser");
const tagRoute = express.Router();

// Get all tags
tagRoute.get("/", getAllTags);

// Add tag
tagRoute.post("/", verifyUser(["admin"]), addTag);

// Export route
module.exports = tagRoute;
