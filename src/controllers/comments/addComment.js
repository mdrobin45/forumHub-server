const { CommentModel } = require("../../models/models");

const addComment = async (req, res) => {
   try {
      const commentData = req.body;

      const result = await CommentModel(commentData).save();

      res.status(200).json({ id: result._id, message: "Comment added" });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = addComment;
