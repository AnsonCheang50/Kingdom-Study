const express = require('express');

const {
	getUserByID,
	loginUser,
	registerUser,
} = require('../controllers/authControllers');

const router = express.Router();

router.post('/:uid', getUserByID);

router.post('/login', loginUser);

router.post('/register', registerUser);

module.exports = router;
