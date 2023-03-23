const express = require('express');

const { authControllers } = require('../controllers');

const router = express.Router();

router.get('/:uid', authControllers.getUserByID);

module.exports = router;
