import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import apiRouter from './routes/apiRouter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());// Allows server to handle req with JSON data in the body

// Routes
app.use('/data', apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});