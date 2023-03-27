const e = require('express');
const { User } = require('../models/User');

exports.getUserByID = async (req, res) => {
	try {
		const user = await User.findById(req.params.uid);

		if (!user) {
			return res.status(400).json({
				success: false,
				message: 'User not found',
			});
		}
		res.status(200).json({
			success: true,
			data: user,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: error.message,
		});
	}
};

exports.loginUser = async (req, res) => {
	const { usrname, password } = req.body;

	if (!usrname || !password) {
		return res.status(400).json({
			success: false,
			message: 'Please add all fields',
		});
	}
	try {
		// Check if user exists
		user = await User.findOne({ username: usrname });
		if (user) {
			if (user.password != password) {
				return res.status(400).json({
					success: false,
					message: "Invalid credentials: password doesn't match",
				});
			}
			res.status(201).json({
				success: true,
				data: user._id,
			});
		}
	} catch (error) {
		res.status(400).json({
			message: error.message,
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
