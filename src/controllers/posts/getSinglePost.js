const { PostModel } = require("../../models/models");

const getSinglePost = async (req, res) => {
   try {
      const { id } = req.params;

      const result = await PostModel.findById(id).populate("author");
      res.send(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getSinglePost;
