const { UserModel } = require("../../models/models");

const getAllUser = async (req, res) => {
   try {
      const result = await UserModel.find();
      res.send(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getAllUser;
