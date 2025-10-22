const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts'); // Add this line
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB(); // Connect to database

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts middleware
app.use(expressLayouts);
app.set('layout', 'layout'); // Set default layout

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', require('./routes/pages'));

// Start server
app.listen(PORT, () => {
  console.log(`Website running at http://localhost:${PORT}`);
});