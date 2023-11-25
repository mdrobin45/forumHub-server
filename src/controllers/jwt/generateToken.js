const jwt = require("jsonwebtoken");

const generateToken = async (req, res) => {
   try {
      const email = req.body;
      const token = jwt.sign(email, process.env.JWT_SECRET_SIGN, {
         expiresIn: "1h",
      });

      // Set token in cookie
      res.cookie("authToken", token, {
         maxAge: 216000,
         httpOnly: true,
      });
      res.status(200).json({ token: token });
   } catch {
      res.status(500).json("Internal server error");
   }
};

module.exports = generateToken;
