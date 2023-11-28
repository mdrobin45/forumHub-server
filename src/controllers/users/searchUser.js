const { UserModel } = require("../../models/models");

const searchUser = async (req, res) => {
   try {
      let { search } = req.query;

      const result = await UserModel.find({
         $or: [
            {
               name: {
                  $regex: search,
                  $options: "i",
               },
            },
         ],
      });
      res.send(result);
   } catch (err) {
      console.log(err);
      res.status(500).json("Internal server error");
   }
};

module.exports = searchUser;
