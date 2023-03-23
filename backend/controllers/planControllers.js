const TEST_PLANS = [
	{
		id: 1,
		title: 'plan1',
		description: 'the first test plan',
	},
	{	
		id:2,
		title: 'plan2',
		description: 'the second test plan',
	},
];

exports.getPlanByID= (req, res) => {
	const planID = req.params.pid;
	const plan = TEST_PLANS.find((plan) => {
		return plan.id == planID;
	});

	if (plan) {
		res.status(200).json({
			plan: plan,
		});
	}
	else {
		res.status(404).json({
			message: 'plan not found',
		});
	}
};
