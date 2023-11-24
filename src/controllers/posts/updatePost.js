const { PostModel } = require("../../models/models");

const updatePost = async (req, res) => {
   try {
      const { id } = req.params;
      const newData = req.body;

      const result = await PostModel.findByIdAndUpdate(id, newData);

      res.status(200).json({ id: result._id, message: "Post updated" });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = updatePost;
