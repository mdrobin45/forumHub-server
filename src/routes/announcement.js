const express = require("express");
const getAllAnnounce = require("../controllers/announcement/getAllAnnounce");
const postAnnounce = require("../controllers/announcement/postAnnounce");
const announceRoute = express.Router();

// Get all announce
announceRoute.get("/", getAllAnnounce);

// Post announce
announceRoute.post("/", postAnnounce);

// Export routes
module.exports = announceRoute;
