const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
   try {
      const { authorization } = req.headers;

      // Check if authorization header blank
      if (!authorization || !authorization.startsWith("Bearer")) {
         return res.status(401).json({ error: "Missing or invalid token" });
      }

      const token = authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_SIGN);

      if (decoded) {
         req.decoded = decoded;
         next();
      } else {
         res.status(401).json({ error: "Invalid token" });
      }
   } catch {
      res.status(401).json("Authentication error");
   }
};

module.exports = verifyToken;
