const { ReportModel } = require("../../models/models");

const getReportedComments = async (req, res) => {
   try {
      const result = await ReportModel.find();
      res.send(result);
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = getReportedComments;
