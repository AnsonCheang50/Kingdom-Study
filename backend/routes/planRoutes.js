const express = require('express');

const {
	getPlans,
	getPlan,
	createPlan,
	updatePlan,
	deletePlan,
} = require('../controllers/planControllers');

const router = express.Router();

const { authorize, protect } = require('../middleware/auth');

router
	.route('/')
	.get(getPlans)
	.post(protect, authorize('user', 'contributer', 'admin'), createPlan);
router
	.route('/:pid')
	.get(getPlan)
	.put(protect, authorize('user', 'contributer', 'admin'), updatePlan)
	.delete(protect, authorize('user', 'contributer', 'admin'), deletePlan);

module.exports = router;
