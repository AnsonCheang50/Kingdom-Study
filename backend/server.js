const path = require('path');

const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require('./routes/routes');

app.use(routes);

app.listen(PORT, console.log(`Server running at PORT:${PORT}`));
