const router = require('express').Router();
const passport = require('passport');
// google auth route
router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// callback route.
router.get(
  '/redirect',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:5173/signin',
    session: false,
  }),
  (req, res) => {
    // create an http only cookie and redirect to the home page
    res.cookie('token', req.user.token, { httpOnly: true, secure: true });
    console.log(res.user);
    res.redirect('http://localhost:5173');
  }
);

module.exports = router;
