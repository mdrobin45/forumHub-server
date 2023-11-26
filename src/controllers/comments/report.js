const { CommentModel, ReportModel } = require("../../models/models");

const reportComment = async (req, res) => {
   try {
      const reportData = req.body;

      const result = await ReportModel(reportData).save();

      res.status(200).json({ id: result._id, message: "Report added" });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = reportComment;
