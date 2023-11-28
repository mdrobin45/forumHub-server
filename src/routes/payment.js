const express = require("express");
const createIntent = require("../controllers/payment/createIntent");
const verifyUser = require("../middlewares/verifyUser");
const paymentRoute = express.Router();

// Create payment intent
paymentRoute.post("/create-intent", createIntent);

// Export route
module.exports = paymentRoute;
