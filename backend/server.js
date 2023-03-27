const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');

const connectDB = require('./config/db');

// Routers
const { authRoutes, planRoutes } = require('./routes');

dotenv.config({
	path: './config/config.env',
});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Dev logging
if (process.env.NODE_ENV == 'development') {
	app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/auth/', authRoutes);
app.use('/api/v1/plan/', planRoutes);

const PORT = process.env.PORT || 5000;

// Connect mongoDB to server then listen
(async () => {
	await connectDB();
	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode at PORT:${PORT}`
		)
	);
})();
