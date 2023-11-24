const express = require("express");
const generateToken = require("../controllers/jwt/generateToken");
const rootRoute = express.Router();

// Generate jwt token
rootRoute.get("/", (req, res) => {
   res.send("Server running");
});

// Generate jwt token
rootRoute.post("/jwt", generateToken);

// Export route
module.exports = rootRoute;
