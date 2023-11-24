const { PostModel } = require("../../models/models");

const deletePost = async (req, res) => {
   try {
      const { id } = req.params;

      const result = await PostModel.findByIdAndDelete(id);

      res.status(200).json({ id: result._id, message: "Post deleted" });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = deletePost;
