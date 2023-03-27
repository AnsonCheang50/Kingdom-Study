const express = require('express');

const {
	getPlans,
	getPlan,
	createPlan,
	updatePlan,
	deletePlan,
} = require('../controllers/planControllers');

const router = express.Router();

router.route('/').get(getPlans).post(createPlan);
router.route('/:pid').get(getPlan).put(updatePlan).delete(deletePlan);

module.exports = router;
