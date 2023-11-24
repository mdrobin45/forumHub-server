const { UserModel } = require("../../models/models");

const addNewUser = async (req, res) => {
   try {
      const userData = req.body;
      const findUser = await UserModel.findOne({ email: userData.email });
      if (findUser) {
         res.send("User exits");
         return;
      }
      const result = await UserModel(userData).save();
      res.status(200).json({ id: result._id, message: "User inserted" });
   } catch {
      res.status(500).json("Internal server error");
   }
};

// Export function
module.exports = addNewUser;
