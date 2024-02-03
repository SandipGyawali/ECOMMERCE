const router = require('express').Router();
const { signIn, signUp } = require('../controllers/user.controller');

router.post('/signup', signUp);
router.post('/signin', signIn);

module.exports = router;
