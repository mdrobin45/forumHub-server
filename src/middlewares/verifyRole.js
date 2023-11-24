const { UserModel } = require("../models/models");

const verifyRole = (roles) => async (req, res, next) => {
   try {
      const { email } = req.query;

      // Retrieve user from database
      const user = await UserModel.findOne({ email });

      // check if user not exits
      if (!user) {
         return res
            .status(403)
            .json({ error: "Forbidden access: User not found" });
      }

      // Check if user has permission with given role
      if (!roles.includes(user.role)) {
         return res
            .status(403)
            .json({ error: "Forbidden access: Insufficient role privileges" });
      }
      next();
   } catch {
      res.status(403).json({
         error: "Forbidden access: Role verification error",
      });
   }
};

module.exports = verifyRole;
