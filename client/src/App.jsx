import { useState } from "react"; // React hook for managing state in the component
import GoalSetup from "./components/GoalSetup"; // Component for setting up the leg day goal, likely includes a form for user input
import { createGoal } from "./api"; // Function to send the goal data to the backend API, defined in api.js, which handles the POST request to save the goal in the database

function App() {
  const [currentGoal, setCurrentGoal] = useState(null); // State variable to hold the current leg day goal, initialized to null (no goal set)

  const handleGoalSubmit = async (goal) => { // Function to handle the submission of the goal from the GoalSetup component
    const savedGoal = await createGoal(goal); // Calls the createGoal function to send the goal to the backend and waits for the response, which should contain the saved goal data
    console.log("Saved to DB:", savedGoal); // Logs the saved goal data to the console for debugging purposes
    setCurrentGoal(savedGoal);// Updates the currentGoal state with the saved goal data, which will trigger a re-render of the component to display the new goal information
  };

  return ( // JSX to render the UI of the application
    <div>
      <h1>Leg Day Tracker 🦵</h1> 
      {!currentGoal ? (
        <GoalSetup onSubmit={handleGoalSubmit} />
      ) : (
        <p>Goal set: {currentGoal.goal} sessions</p>
      )}
    </div>
  )
}

export default App