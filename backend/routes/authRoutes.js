const express = require('express');

const { authControllers } = require('../controllers');

const router = express.Router();

router.get('/', authControllers.testAuthController);

module.exports = router;
