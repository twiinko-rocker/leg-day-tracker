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

// GET /api/goal - Get the current goal

router.get("/", async (req, res) => {
    try {
        const currentGoal = await Goal.findOne().sort({ createdAt: -1 }); // Get the most recent goal
        if (!currentGoal) {
            return res.status(404).json({ error: "No goal found" }); // Return a 404 status if no goal is found
        }
        res.status(200).json(currentGoal); // Return the current goal with a 200 status
    } catch (err) {
        console.error("Error fetching goal:", err); 
        res.status(500).json({ error: "Server error" }); // Return a 500 status on error
    }
})

//PATCH /api/goal/:id - Update the completed sessions for a goal

router.patch("/log", async (req, res) => {
    try {
        const currentGoal = await Goal.findOne().sort({ createdAt: -1 }); // Get the most recent goal
        if (!currentGoal) {
            return res.status(404).json({ error: "No goal found" }); // Return a 404 status if no goal is found
        }
        currentGoal.completedSessions += 1; // Increment the completed sessions
        const updatedGoal = await currentGoal.save(); // Save the updated goal to the database
        res.status(200).json(updatedGoal); // Return the updated goal with a 200 status
    } catch (err) {
        console.error("Error updating goal:", err);
        res.status(500).json({ error: "Server error" }); // Return a 500 status on error
    }   
})



export default router; // Export the router to be used in index.js