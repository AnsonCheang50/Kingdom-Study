const mongoose = require('mongoose');

const PlanSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please add plan title'],
		trim: true,
		maxlength: [80, 'Title cannot be more than 80 characters'],
	},
	description: {
		type: String,
		// required: [true, 'Please add plan description'],
		maxlength: [500, 'Description cannot be more than 500 characters'],
	},
	startTime: {
		type: String,
		required: [true, 'Please add start time'],
	},
	endTime: {
		type: String,
		required: [true, 'Please add end time'],
	},
	date: {
		type: Date,
		required: [true, 'Please add date'],
	},
	priority: {
		type: Number,
		default: 1,
		min: [1, 'Priority level must be at least 1'],
		max: [5, 'Priority level must be at most 5'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	}
});

module.exports = mongoose.model('Plan', PlanSchema);
