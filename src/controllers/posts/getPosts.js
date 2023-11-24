const { PostModel } = require("../../models/models");

const getPosts = async (req, res) => {
   try {
      const result = await PostModel.find();
      res.send(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getPosts;
