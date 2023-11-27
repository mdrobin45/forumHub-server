const express = require("express");
const getAllAnnounce = require("../controllers/announcement/getAllAnnounce");
const postAnnounce = require("../controllers/announcement/postAnnounce");
const updateAnnounce = require("../controllers/announcement/updateAnnounce");
const announceRoute = express.Router();

// Get all announce
announceRoute.get("/", getAllAnnounce);

// Post announce
announceRoute.post("/", postAnnounce);

// Update announce
announceRoute.patch("/:id", updateAnnounce);

// Export routes
module.exports = announceRoute;
