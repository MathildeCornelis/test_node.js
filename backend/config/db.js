const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect()
    } catch (error) {
        
    }
}