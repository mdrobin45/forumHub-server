const express = require("express");
const generateToken = require("../controllers/jwt/generateToken");
const clearToken = require("../controllers/jwt/clearToken");
const rootRoute = express.Router();

// Generate jwt token
rootRoute.get("/", (req, res) => {
   res.send("Server running");
});

// Generate jwt token
rootRoute.post("/jwt", generateToken);

// Logout
rootRoute.post("/logout", clearToken);

// Export route
module.exports = rootRoute;
