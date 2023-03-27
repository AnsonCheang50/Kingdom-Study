const { Plan } = require('../models');

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
