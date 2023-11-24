const { AnnouncementModel } = require("../../models/models");

const postAnnounce = async (req, res) => {
   try {
      const announceData = req.body;

      const result = await AnnouncementModel(announceData).save();

      res.status(200).json({ id: result._id, message: "Announce added" });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = postAnnounce;
