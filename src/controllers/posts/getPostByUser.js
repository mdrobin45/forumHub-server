const { PostModel, UserModel } = require("../../models/models");

const getPostByUser = async (req, res) => {
   try {
      const { email } = req.query;

      // Find user
      const user = await UserModel.findOne({ email });

      const result = await PostModel.find({ author: user._id }).populate({
         path: "author",
         match: { email: user.email },
         select: "name email image",
      });
      res.send(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getPostByUser;
