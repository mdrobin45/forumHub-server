const express = require("express");
const addNewUser = require("../controllers/users/addNewUser");
const getUserRole = require("../controllers/users/getUserRole");
const usersRoute = express.Router();

// Add new user
usersRoute.post("/", addNewUser);

// Get user with email
usersRoute.get("/role", getUserRole);

// Export routes
module.exports = usersRoute;
