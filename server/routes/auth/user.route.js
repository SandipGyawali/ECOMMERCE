const router = require('express').Router();
const { signIn, signUp } = require('../../controllers/user.controller');
const { isValidToken } = require('../../utils/verifyToken');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/isValid', isValidToken);

module.exports = router;
