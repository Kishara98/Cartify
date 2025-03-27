const mongoose = require('mongoose');
require('dotenv').config();

async function mongoConnection() {
    try {
        const mongoURL = process.env.MONGODB_CONNECTION_URL;
        await mongoose.connect(mongoURL);
        console.log('MongoDB connected successfully!')
    } catch (error) {
        console.error('MongoDB connection failed!', error);
        throw error;
    }
}

module.exports = {
    mongoConnection
}