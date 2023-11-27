const { TagModel } = require("../../models/models");

const getAllTags = async (req, res) => {
   try {
      const result = await TagModel.find();
      res.send(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getAllTags;
