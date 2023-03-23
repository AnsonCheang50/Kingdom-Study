const User = require('../models/User');

const TEST_USERS = [
	{
		id: 1,
		email: 'email1@email.com',
		username: 'user1',
		password: 'password',
	},
	{
		id: 2,
		email: 'email2@email.com',
		username: 'user2',
		password: 'password',
	},
];

exports.getUserByID = (req, res) => {
	const userID = req.params.uid;
	const user = TEST_USERS.find((user) => {
		return user.id == userID;
	});

	if (user) {
		res.status(200).json({
			user: user,
		});
	} else {
		res.status(404).json({
			message: 'user not found',
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
		res.status(200).json({
			user: user,
		});
	} else {
		res.status(400).json({
			message: 'User could not be created',
		});
	}
};


exports.registerUser = async (req, res) => {
	const { email, username, password } = req.body;

	if (!email || !username || !password) {
		res.status(400);
		throw new Error('Please add all fields');
	}

	// Check if user exists
	const userExists = await User.findOne({ email });

	if (userExists) {
		return res.status(400).json({
			message: 'User already exists'
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
			message: 'User could not be created',
		});
	}
};
