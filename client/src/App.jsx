import { useState, useEffect } from "react"; // React hook for managing state in the component
import GoalSetup from "./components/GoalSetup"; // Component for setting up the leg day goal, likely includes a form for user input
import Tracker from "./components/Tracker";
import { checkPassword, createGoal, fetchGoal, logSession } from "./api"; // Function to send the goal data to the backend API, defined in api.js, which handles the POST request to save the goal in the database

function App() {
  const [currentGoal, setCurrentGoal] = useState(null); // State variable to hold the current leg day goal, initialized to null (no goal set)

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => { // React hook that runs after the component mounts, used to fetch the current goal from the backend API when the app loads
    const loadGoal = async () => {
      const existingGoal = await fetchGoal(); // Calls the fetchGoal function to get the current goal data from the backend API and waits for the response
      if (existingGoal) {
        setCurrentGoal(existingGoal); // If a goal is returned from the API, it updates the currentGoal state with that data, allowing the app to display the existing goal information
      }
    }

    loadGoal();
  }, []);

  const handleLogin = async () => {
    const result = await checkPassword(password);
    if (result.success) {
      setIsAuthenticated(true);
    } else {
      alert(result.message);
      setPassword("");
    }
  };

  const handleGoalSubmit = async (goal) => { // Function to handle the submission of the goal from the GoalSetup component
    const savedGoal = await createGoal(goal); // Calls the createGoal function to send the goal to the backend and waits for the response, which should contain the saved goal data
    console.log("Saved to DB:", savedGoal); // Logs the saved goal data to the console for debugging purposes
    setCurrentGoal(savedGoal);// Updates the currentGoal state with the saved goal data, which will trigger a re-render of the component to display the new goal information
  };

  const handleLogSession = async () => {
    const updatedGoal = await logSession();
    setCurrentGoal(updatedGoal);
  };

  const handleReset = () => {
    setCurrentGoal(null);
};

  return (
    <div className="App">

      <h1>Leg Day Tracker 🦵</h1>
      {!isAuthenticated ? (
        <div>
          <h2>Enter Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Password"
          />
          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : !currentGoal ? (
        <GoalSetup onSubmit={handleGoalSubmit} />
      ) : (
        <Tracker
          goalData={currentGoal}
          onLog={handleLogSession}
          onReset={handleReset}
        />
      )}

    </div>
  )
}

export default App