const { ReportModel } = require("../../models/models");

const deleteReportComment = async (req, res) => {
   try {
      const { id } = req.params;
      const result = await ReportModel.findByIdAndDelete(id);
      res.status(200).json({ id: result._id });
   } catch {
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = deleteReportComment;
