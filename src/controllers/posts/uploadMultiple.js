const { PostModel } = require("../../models/models");

const uploadMultiple = async (req, res) => {
   try {
      const postData = req.body;

      const result = await PostModel.insertMany(postData);

      res.status(200).json({ message: "Post added" });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = uploadMultiple;
