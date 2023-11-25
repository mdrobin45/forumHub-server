const { UserModel } = require("../../models/models");

const getUserRole = async (req, res) => {
   try {
      const { email } = req.query;
      const result = await UserModel.findOne({ email });
      res.status(200).json({ role: result.role });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getUserRole;
