import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
    goal: {
        type: Number,
        required: true,
    },
    completedSessions: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Goal', goalSchema);