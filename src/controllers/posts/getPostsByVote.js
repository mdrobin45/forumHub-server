const { PostModel } = require("../../models/models");

const getPostsByVote = async (req, res) => {
   try {
      const result = PostModel.aggregate([
         {
            $addFields: {
               voteDifference: { $subtract: ["$upVote", "$downVote"] },
            },
         },
         {
            $sort: {
               voteDifference: -1,
            },
         },
      ]).exec();
      res.json(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getPostsByVote;
