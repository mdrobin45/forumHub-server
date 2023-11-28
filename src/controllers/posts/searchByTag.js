const { PostModel } = require("../../models/models");

const searchByTag = async (req, res) => {
   try {
      let { search } = req.query;
      search = search.toLowerCase();

      const result = await PostModel.find({ tag: search }).populate("author");
      res.send(result);
   } catch (err) {
      console.log(err);
      res.status(500).json("Internal server error");
   }
};

module.exports = searchByTag;
