const { CommentModel } = require("../../models/models");

const getComments = async (req, res) => {
   try {
      const result = await CommentModel.find();
      res.send(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getComments;
