const ErrorResponse = require('../helper/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// 	@desc 		Register user
// 	@route		POST /api/v1/auth/register
// 	@access		Public
exports.register = asyncHandler(async (req, res, next) => {
	const { email, username, password } = req.body;

	// console.log(email, username, password);
	// Create user
	const user = await User.create({
		email,
		username,
		password,
	});

	sendTokenResponse(user, 200, res);
});

// 	@desc 		Login user
// 	@route		POST /api/v1/auth/login
// 	@access		Public
exports.login = asyncHandler(async (req, res, next) => {
	const { username, password } = req.body;

	// Validate username & password
	if (!username || !password) {
		return next(
			new ErrorResponse('Please provide an email and password', 400)
		);
	}

	// Check for user
	const user = await User.findOne({ username }).select('+password');

	if (!user) {
		return next(new ErrorResponse('Invalid credentials', 401));
	}

	// Check if password matches
	const isMatch = await user.matchPassword(password);

	if (!isMatch) {
		if (!user) {
			return next(new ErrorResponse('Invalid credentials', 401));
		}
	}

	sendTokenResponse(user, 200, res);
});

// 	@desc 		Get current logged in user
// 	@route		GET /api/v1/auth/me
// 	@access		Private
exports.getMe = asyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user.id);

	res.status(200).json({
		success: true,
		data: user,
	});
});

// Get token from model, create cookie & send response
const sendTokenResponse = (user, statusCode, res) => {
	// Create token
	const token = user.getSignedJwtToken();

	const options = {
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
		),
		httpOnly: true,
	};

	if (process.env.NODE_ENV === 'production') {
		options.secure = true;
	}

	res.status(statusCode).cookie('token', token, options).json({
		success: true,
		token,
	});
};
