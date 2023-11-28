const express = require("express");
const addNewUser = require("../controllers/users/addNewUser");
const updateUser = require("../controllers/users/updateUser");
const getUser = require("../controllers/users/getUser");
const getAllUser = require("../controllers/users/getAllUsers");
const searchUser = require("../controllers/users/searchUser");
const verifyUser = require("../middlewares/verifyUser");
const usersRoute = express.Router();

// Add new user
usersRoute.post("/", addNewUser);

// Get user with email
usersRoute.get("/", verifyUser(["member", "admin"]), getUser);

// Get all users
usersRoute.get("/all", verifyUser(["admin"]), getAllUser);

// Search user
usersRoute.get("/search", verifyUser(["admin"]), searchUser);

// Update user data
usersRoute.patch("/", verifyUser(["member", "admin"]), updateUser);

// Export routes
module.exports = usersRoute;
