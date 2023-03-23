const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const {authRoutes, planRoutes} = require('./routes');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Connect mongoDB to server and listen
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
app.use('/api/auth/', authRoutes);
app.use('/api/plan/', planRoutes);

app.listen(PORT, console.log(`Server running at PORT:${PORT}`));