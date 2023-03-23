const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const routes = require('./routes/routes');

dotenv.config();
const PORT = process.env.PORT || 5000;

// Connect mongoDB to server
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
app.use('/api/', routes);

app.listen(PORT, console.log(`Server running at PORT:${PORT}`));
