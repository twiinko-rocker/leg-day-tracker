import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

const app = express();
app
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Leg Day Tracker API is running')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})