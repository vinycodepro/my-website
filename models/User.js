const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true
    }
}, {
    timestamps: true  // This adds createdAt and updatedAt automatically
});

// Create model
const Contact = mongoose.model('Contact', userSchema);

module.exports = Contact;