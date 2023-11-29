const { CommentModel } = require("../../models/models");

const deleteComment = async (req, res) => {
   try {
      const { id } = req.params;
      const result = await CommentModel.findByIdAndDelete(id);
      res.status(200).json({ id: result._id });
   } catch {
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = deleteComment;
