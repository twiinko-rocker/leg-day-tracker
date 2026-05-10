import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import goalRoutes from './routes/goal.js'; // Import the goal routes
import cors from 'cors';


// Load environment variables FIRST
dotenv.config();

const app = express();

app.use(cors({
    origin: 'https://tw-leg-day-tracker.netlify.app'
}))

// Middleware (you’ll need this soon for PaOST requests)
app.use(express.json());
app.use('/api/goal', goalRoutes); // Use the goal routes for /api/goal endpoints

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

const PORT = process.env.PORT || 3000;


// Routes
app.get('/', (req, res) => {
    res.send('Leg Day Tracker API is running');
});

// Authentication route

app.post('/api/auth', (req, res) => {
    const { password } = req.body;
    if (password === process.env.APP_PASSWORD) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Wrong password' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

