const jwt = require("jsonwebtoken");

const generateToken = async (req, res) => {
   try {
      const email = req.body;
      const token = jwt.sign(email, process.env.JWT_SECRET_SIGN, {
         expiresIn: "1h",
      });

      res.send({ token });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = generateToken;
