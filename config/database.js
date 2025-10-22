const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Remove deprecated options since they're not needed anymore
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('❌ Database connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;