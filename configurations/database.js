const mongoose = require("mongoose");

const database = () => {
   try {
      mongoose.connect(process.env.MONGO_LOCAL_URI);
      console.log("Database connection successful");
   } catch {
      console.log("Database connection failed");
   }
};

module.exports = database;
