const express = require("express");
const generateToken = require("../controllers/jwt/generateToken");
const rootRoute = express.Router();

// Generate jwt token
rootRoute.post("/jwt", generateToken);

// Export route
module.exports = rootRoute;
