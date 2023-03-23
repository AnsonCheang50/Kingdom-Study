const express = require('express');

const { authControllers } = require('../controllers');

const router = express.Router();

router.get('/:uid', authControllers.getUserByID);

router.post('/login', authControllers.loginUser);

router.post('/register', authControllers.registerUser);

module.exports = router;
