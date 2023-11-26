const stripe = require("stripe")(
   "sk_test_51OEWcNEEQXEbu6JC4CgpoOFTRcARfe8beKUMBdxOeHKv3GcWxqSkjRNChKW3JZbtVGfILw0yITdf2VHY0nufML1d00p7m6jL1E"
);

const createIntent = async (req, res) => {
   try {
      const { price } = req.body;

      // Create payment intent
      const paymentIntent = await stripe.paymentIntents.create({
         payment_method_types: ["card"],
         amount: parseFloat(price * 100),
         currency: "usd",
      });

      res.send({ clientSecret: paymentIntent.client_secret });
      console.log(paymentIntent);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

module.exports = createIntent;
