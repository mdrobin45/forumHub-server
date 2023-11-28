const { PostModel } = require("../../models/models");

const upVote = async (req, res) => {
   try {
      const { id } = req.params;
      await PostModel.findByIdAndUpdate(id, {
         $inc: { upVote: 1 },
      });

      res.status(200).json({ status: 200 });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = upVote;
