const { Plan } = require('../models');

// 	@desc 		Get all plans
// 	@route		GET /api/v1/plan/
// 	@access		Public
exports.getPlans = async (req, res, next) => {
	try {
		const plans = await Plan.find();
		res.status(200).json({
			success: true,
			count: plans.length,
			data: plans,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			msg: 'Get all plans failed',
		});
	}
};

// 	@desc 		Get single plan by pid
// 	@route		GET /api/v1/plan/:pid
// 	@access		Private
exports.getPlan = async (req, res, next) => {
	try {
		const plan = await Plan.findById(req.params.pid);

		if (!plan) {
			return res.status(400).json({
				success: false,
				msg: 'Get plan failed',
			});
		}
		res.status(200).json({
			success: true,
			data: plan,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			msg: error.message,
		});
	}
};

// 	@desc 		Create plan
// 	@route		POST /api/v1/plan/
// 	@access		Private
exports.createPlan = async (req, res, next) => {
	try {
		const plan = await Plan.create(req.body);
		res.status(201).json({
			success: true,
			data: plan,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			msg: error.message,
		});
	}
};

// 	@desc 		Update plan
// 	@route		PUT /api/v1/plan/:pid
// 	@access		Private
exports.updatePlan = async (req, res, next) => {
	try {
		const plan = await Plan.findByIdAndUpdate(req.params.pid, req.body, {
			new: true,
			runValidators: true,
		});

		if (!plan) {
			return res.status(400).json({
				success: false,
				msg: 'Plan not found',
			});
		}
		res.status(200).json({
			success: true,
			data: plan,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			msg: error.message,
		});
	}
};

// 	@desc 		Delete plan
// 	@route		DELETE /api/v1/plan/:pid
// 	@access		Private
exports.deletePlan = async (req, res, next) => {
	try {
		const plan = await Plan.findByIdAndDelete(req.params.pid);

		if (!plan) {
			return res.status(400).json({
				success: false,
				msg: 'Plan not found',
			});
		}
		res.status(200).json({
			success: true,
			data: {},
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			msg: error.message,
		});
	}
};








