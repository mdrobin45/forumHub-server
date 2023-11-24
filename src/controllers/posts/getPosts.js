const { PostModel } = require("../../models/models");

const getPosts = async (req, res) => {
   try {
      const result = await PostModel.find();
      res.send(result);
   } catch (err) {
      console.log(err);
      res.status(500).json("Internal server error");
   }
};

module.exports = getPosts;
