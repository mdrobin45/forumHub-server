const { AnnouncementModel } = require("../../models/models");

const getAllAnnounce = async (req, res) => {
   try {
      const result = await AnnouncementModel.find();
      res.send(result);
   } catch (err) {
      res.status(500).json("Internal server error");
   }
};

module.exports = getAllAnnounce;
