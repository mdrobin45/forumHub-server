const { CommentModel } = require("../../models/models");

const getCommentsByUser = async (req, res) => {
   try {
      const { email } = req.query;

      const result = await CommentModel.find({ commenterEmail: email });
      res.send(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getCommentsByUser;
