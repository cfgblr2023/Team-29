const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failed',
    session: false
  }),
  function (req, res) {
    res.redirect(
      `${process.env.FRONTEND_URL}/successfulGoogleAuth?token=${req.user.jwt}?isNew=${req.user.isNew}`
    )
  }
)

module.exports = router;
