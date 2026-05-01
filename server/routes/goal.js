import express from "express"; // Import Express
import Goal from "../models/Goal.js"; // Import the Goal model

const router = express.Router(); // Create a new goal

// POST /api/goal - Create a new goal

router.post("/", async (req, res) => {
    try {
        const { goal } = req.body; // Get the goal from the request body
        const newGoal = new Goal({ goal }); // Create a new Goal instance
        const savedGoal = await newGoal.save(); // Save the goal to the database
        res.status(201).json(savedGoal); // Return the saved goal with a 201 status
    } catch (err) {
        console.error("Error creating goal:", err);
        res.status(500).json({ error: "Server error" }); // Return a 500 status on error
    }
})

export default router; // Export the router to be used in index.js