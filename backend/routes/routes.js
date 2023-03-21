const path = require('path');

const express = require('express');

const controllers = require('../controllers/controllers');

const router = express.Router();

router.get('/', controllers.testController);

module.exports = router;