const express = require('express');

const { planControllers } = require('../controllers');

const router = express.Router();

router.get('/', planControllers.testPlanController);

module.exports = router;
