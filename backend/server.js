const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const { authRoutes, planRoutes } = require('./routes');

dotenv.config({
	path: './config/config.env',
});

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
app.use('/api/auth/', authRoutes);
app.use('/api/plan/', planRoutes);

// Connect mongoDB to server then listen
(async () => {
	try {
		await connectDB();
	} catch (error) {
		console.error(error);
		process.env.exit(1);
	}
	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode at PORT:${PORT}`
		)
	);
})();
