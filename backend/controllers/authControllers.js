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
