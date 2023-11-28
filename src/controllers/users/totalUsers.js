const { UserModel } = require("../../models/models");

const totalUsers = async (req, res) => {
   try {
      const count = await UserModel.countDocuments();

      res.status(200).json(count);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = totalUsers;
