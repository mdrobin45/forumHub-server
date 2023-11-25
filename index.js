const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require("cors");
const rootRoute = require("./src/routes/root");
const usersRoute = require("./src/routes/users");
const database = require("./src/configurations/database");
const globalErrorHandler = require("./src/middlewares/globalErrorHandler");
const postRoute = require("./src/routes/posts");
const commentRoute = require("./src/routes/comments");
const announceRoute = require("./src/routes/announcement");

// Use middleware

app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());

// Database connection
database();

// Application routes
app.use("/", rootRoute);
app.use("/users", usersRoute);
app.use("/posts", postRoute);
app.use("/comments", commentRoute);
app.use("/announce", announceRoute);

// Global error handler
app.use(globalErrorHandler);

// Listen server
app.listen(port, () => {
   console.log(`Server is running is port ${port}`);
});
