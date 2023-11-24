const { PostModel } = require("../../models/models");

const getPostByUser = async (req, res) => {
   try {
      const { email } = req.query;

      const result = await PostModel.find({ email });
      res.send(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getPostByUser;
