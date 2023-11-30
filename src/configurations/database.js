const mongoose = require("mongoose");

const database = () => {
   try {
      mongoose.connect(process.env.DB_CLOUD_URI);
      console.log("Database connection successful");
   } catch {
      console.log("Database connection failed");
   }
};

module.exports = database;
