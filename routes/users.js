const express = require("express");
const addNewUser = require("../controllers/users/addNewUser");
const usersRoute = express.Router();

// Add new user
usersRoute.post("/", addNewUser);

// Export routes
module.exports = usersRoute;
