const { UserModel } = require("../../models/models");

const getUser = async (req, res) => {
   try {
      const { email } = req.query;
      const result = await UserModel.findOne({ email });
      res.send(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getUser;
