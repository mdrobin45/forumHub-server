const { CommentModel } = require("../../models/models");

const addMultipleComment = async (req, res) => {
   try {
      const commentsData = req.body;

      await CommentModel.insertMany(commentsData);

      res.status(200).json({ message: "Comment added" });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = addMultipleComment;
