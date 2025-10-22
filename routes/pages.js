const express = require('express');
const Contact = require('../models/User');  // ← ADD THIS LINE
const router = express.Router();

// Home page
router.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Home Page',
        currentPage: 'home'
    });
});

// About page
router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Us',
        currentPage: 'about'
    });
});

// Contact page - GET
router.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact Us',
        currentPage: 'contact'
    });
});

// Contact form submission - POST ← UPDATE THIS ROUTE
router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Validate required fields
        if (!name || !email || !message) {
            return res.render('pages/contact', {
                title: 'Contact Us',
                currentPage: 'contact',
                errorMessage: 'All fields are required.'
            });
        }
        
        // Save to database
        await Contact.create({
            name,
            email,
            message
        });
        
        console.log('✅ Contact form saved to database:', { name, email });
        
        res.render('pages/contact', {
            title: 'Contact Us',
            currentPage: 'contact',
            successMessage: 'Thank you for your message! We\'ll get back to you soon.'
        });
    } catch (error) {
        console.error('❌ Database error:', error);
        res.render('pages/contact', {
            title: 'Contact Us',
            currentPage: 'contact',
            errorMessage: 'Something went wrong. Please try again.'
        });
    }
});

module.exports = router;