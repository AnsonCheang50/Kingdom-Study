const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Routers
const { authRoutes, planRoutes } = require('./routes');

dotenv.config({
	path: './config/config.env',
});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Dev logging
if (process.env.NODE_ENV == 'development') {
	app.use(morgan('dev'));
} else if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// Mount routers
app.use('/api/v1/auth/', authRoutes);
app.use('/api/v1/plan/', planRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Connect mongoDB to server then listen
(async () => {
	await connectDB();
	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode at PORT:${PORT}`
				.blue
		)
	);
})();
