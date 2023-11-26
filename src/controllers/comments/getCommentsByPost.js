const { CommentModel } = require("../../models/models");

const getCommentsByPost = async (req, res) => {
   try {
      const { id } = req.query;

      const result = await CommentModel.find({ post: id });
      res.send(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getCommentsByPost;
