const { PostModel } = require("../../models/models");

const addPost = async (req, res) => {
   try {
      const postData = req.body;

      const result = await PostModel(postData).save();

      res.status(200).json({ id: result._id, message: "Post added" });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = addPost;
