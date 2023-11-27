const { PostModel } = require("../../models/models");

const downVote = async (req, res) => {
   try {
      const { id } = req.params;
      await PostModel.findByIdAndUpdate(id, {
         $inc: { downVote: 1 },
      });
      res.status(200).json({ status: 200 });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = downVote;
