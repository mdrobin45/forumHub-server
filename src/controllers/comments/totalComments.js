const { CommentModel } = require("../../models/models");

const totalComments = async (req, res) => {
   try {
      const count = await CommentModel.countDocuments();

      res.status(200).json(count);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = totalComments;
