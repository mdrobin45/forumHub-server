const express = require("express");
const addNewUser = require("../controllers/users/addNewUser");
const updateUser = require("../controllers/users/updateUser");
const getUser = require("../controllers/users/getUser");
const getAllUser = require("../controllers/users/getAllUsers");
const usersRoute = express.Router();

// Add new user
usersRoute.post("/", addNewUser);

// Get user with email
usersRoute.get("/", getUser);

// Get all users
usersRoute.get("/all", getAllUser);

// Update user data
usersRoute.patch("/", updateUser);

// Export routes
module.exports = usersRoute;
