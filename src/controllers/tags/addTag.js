const { TagModel } = require("../../models/models");

const addTag = async (req, res) => {
   try {
      const { tag } = req.body;

      const result = await TagModel({ name: tag }).save();

      res.status(200).json({ id: result._id, message: "Tag added" });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = addTag;
