const { PostModel } = require("../../models/models");

const searchByTag = async (req, res) => {
   try {
      const { search } = req.query;

      const result = await PostModel.find({ tag: search }).populate("author");
      res.send(result);
   } catch (err) {
      console.log(err);
      res.status(500).json("Internal server error");
   }
};

module.exports = searchByTag;
