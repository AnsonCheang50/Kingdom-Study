const TEST_USERS = [
	{
		id: 1,
		name: 'user1',
	},
	{
		id: 2,
		name: 'user2',
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
