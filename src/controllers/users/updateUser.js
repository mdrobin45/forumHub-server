const { UserModel } = require("../../models/models");

const updateUser = async (req, res) => {
   try {
      const { email } = req.query;
      const data = req.body;

      const result = await UserModel.updateOne({ email }, data);

      if (result.modifiedCount > 0) {
         res.status(200).json({ message: "user updated" });
      }
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = updateUser;
