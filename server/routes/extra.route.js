const router = require('express').Router();
const { subscribe } = require('../controllers/extra.controller');

router.post('/subscribe', subscribe);

module.exports = router;
