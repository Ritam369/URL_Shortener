import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

function connectDB() {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });
}

export default connectDB;
