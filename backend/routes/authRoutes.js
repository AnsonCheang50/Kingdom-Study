const express = require('express');

const { authControllers } = require('../controllers');

const router = express.Router();

router.get('/:uid', authControllers.getUserByID);

router.post('/', authControllers.registerUser);

module.exports = router;
