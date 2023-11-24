const { CommentModel } = require("../../models/models");

const commentCount = async (req, res) => {
   try {
      const { id } = req.query;
      const result = await CommentModel.countDocuments({
         post: id,
      });

      res.status(200).json({ count: result });
   } catch (err) {
      console.log(err);
      res.status(500).json("Internal server error");
   }
};

module.exports = commentCount;
