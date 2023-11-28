const { PostModel } = require("../../models/models");

const totalPosts = async (req, res) => {
   try {
      const count = await PostModel.countDocuments();

      res.status(200).json(count);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = totalPosts;
