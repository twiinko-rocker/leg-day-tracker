import { useState } from "react";

const GoalSetup = ({ onSubmit }) => { // Component for setting up the user's leg day goal
    const [goal, setGoal] = useState(""); // State to hold the user's input for the goal

    const handleSubmit = (e) => { // Function to handle form submission
        e.preventDefault();
        if (!goal) return; // If the goal is empty, do nothing

        onSubmit(Number(goal)); // Call the onSubmit function passed as a prop with the goal as an integer
        setGoal(""); // Reset the input field after submission

    }

    return (
        <div>
            <h2>Set Your Leg Day Goal</h2>

            <input // Input field for the user to enter their leg day goal
                type="number"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Enter number of leg day sessions"
            />

            <button onClick={handleSubmit}>
                Set Goal
            </button>
        </div>
    )
}

export default GoalSetup; // Export the GoalSetup component to be used in other parts of the application