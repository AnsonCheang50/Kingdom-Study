const express = require('express');

const { planControllers } = require('../controllers');

const router = express.Router();

router.get('/:pid', planControllers.getPlanByID);

module.exports = router;
