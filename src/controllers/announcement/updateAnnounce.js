const { AnnouncementModel } = require("../../models/models");

const updateAnnounce = async (req, res) => {
   try {
      const { id } = req.params;
      const data = req.body;

      const result = await AnnouncementModel.findByIdAndUpdate(id, data);

      res.status(200).json({ message: "announce updated" });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = updateAnnounce;
