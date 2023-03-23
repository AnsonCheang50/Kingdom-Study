const { User } = require('../models');

exports.getUserByID = async (req, res) => {
	const { uid } = req.body;

	if (String(uid).length != 24) {
		return res.status(400).json({
			message: 'Invalid uid',
		});
	}

	const user = await User.findById(uid);

	if (user) {
		res.status(200).json({
			user: user,
		});
	} else {
		res.status(400).json({
			message: 'User not found',
		});
	}
};

exports.loginUser = async (req, res) => {
	const { username, password } = req.body;

	if (!username || !password) {
		res.status(400);
		throw new Error('Please add all fields');
	}

	// Check if user exists
	const user = await User.findOne({ username });

	if (user) {
		if (user.password != password) {
			return res.status(400).json({
				message: "Invalid credentials: password doens't match",
			});
		}
		res.status(200).json({
			uid: user._id,
		});
	} else {
		res.status(400).json({
			message: 'Account not found',
		});
	}
};

exports.registerUser = async (req, res) => {
	const { email, username, password } = req.body;

	if (!email || !username || !password) {
		return res.status(400).json({
			message: 'Please fill out all fields',
		});
	}

	// Check if user exists
	const userExists = await User.findOne({ email });

	if (userExists) {
		return res.status(400).json({
			message: 'An account with this email already exists',
		});
	}

	const user = await User.create({
		email,
		username,
		password,
	});

	if (user) {
		res.status(201).json({
			email: email,
			username: username,
		});
	} else {
		res.status(400).json({
			message: 'Account could not be created',
		});
	}
};
