import React from 'react'; 

const Tracker = ({ goalData, onLog }) => {  // Functional component that takes in goalData and onLog as props. goalData contains the current goal and completed sessions, while onLog is a function to log a new session when the button is clicked.
    const { goal, completedSessions } = goalData; // Destructuring the goal and completedSessions from the goalData prop for easier access.

    const percentage = goal
        ? (completedSessions / goal) * 100
        : 0;

    return ( // JSX to render the tracker UI, displaying the goal, completed sessions, a progress bar, and a button to log new sessions.
        <div>
            <h2>Goal: {goal} sessions</h2>

            <p>
                Completed: {completedSessions} / {goal}
            </p>

            {/* Progress Bar */}
            <div
                style={{
                    background: '#333',
                    borderRadius: '8px',
                    height: '20px',
                    marginBottom: '10px',
                }}
            >
                <div
                    style={{
                        background: 'green',
                        width: `${percentage}%`,
                        height: '100%',
                        borderRadius: '8px',
                    }}
                />
            </div>

            <button onClick={onLog}>
                Log Session 💪
            </button>
        </div>
    );
}

export default Tracker;