const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require("cors");
const rootRoute = require("./src/routes/root");
const usersRoute = require("./src/routes/users");
const database = require("./src/configurations/database");
const app = express();

// Use middleware
app.use(cors());
app.use(express.json());

// Database connection
database();

// Application routes
app.use("/", rootRoute);
app.use("/users", usersRoute);

// Listen server
app.listen(port, () => {
   console.log(`Server is running is port ${port}`);
});
