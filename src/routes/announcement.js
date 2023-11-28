const express = require("express");
const getAllAnnounce = require("../controllers/announcement/getAllAnnounce");
const postAnnounce = require("../controllers/announcement/postAnnounce");
const updateAnnounce = require("../controllers/announcement/updateAnnounce");
const verifyUser = require("../middlewares/verifyUser");
const announceRoute = express.Router();

// Get all announce
announceRoute.get("/", getAllAnnounce);

// Post announce
announceRoute.post("/", verifyUser(["admin"]), postAnnounce);

// Update announce
announceRoute.patch("/:id", verifyUser(["member"]), updateAnnounce);

// Export routes
module.exports = announceRoute;
