import React from 'react';
import leg1 from '../assets/leg1.png';
import leg2 from '../assets/leg2.png';
import leg3 from '../assets/leg3.png';
import leg4 from '../assets/leg4.png';

const Tracker = ({ goalData, onLog, onReset }) => {  // Functional component that takes in goalData and onLog as props. goalData contains the current goal and completed sessions, while onLog is a function to log a new session when the button is clicked.
    const { goal, completedSessions } = goalData; // Destructuring the goal and completedSessions from the goalData prop for easier access.

    const percentage = goal 
        ? (completedSessions / goal) * 100 
        : 0;
    const cappedPercentage = Math.min(percentage, 100);

        const getLegImage = (percentage) => {
        if (percentage <= 32) return leg1;
        if (percentage <= 65) return leg2;
        if (percentage <= 99) return leg3;
        return leg4;
    };


    return ( // JSX to render the tracker UI, displaying the goal, completed sessions, a progress bar, and a button to log new sessions.
        <div>
            <h2>Goal: {goal} sessions</h2>

            <p>
                Completed: {completedSessions} / {goal}
            </p>

            {/* Leg Image */}
            <img
                src={getLegImage(cappedPercentage)}
                alt="Leg progress"
                style={{ width: '200px', margin: '20px auto', display: 'block' }}
            />

            {/* Progress Bar */}
            <div
                style={{
                    background: '#1a1a1a',
                    borderRadius: '999px',
                    height: '16px',
                    marginBottom: '24px',
                    overflow: 'hidden',
                    border: '1px solid #333'
                }}
            >
            <div
                style={{
                    background: 'linear-gradient(90deg, #22c55e, #16a34a)',
                    width: `${cappedPercentage}%`,
                    height: '100%',
                    borderRadius: '999px',
                    transition: 'width 0.4s ease'
                }}
                />
            </div>

        {completedSessions >= goal ? (
            <p style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '1.2rem' }}>
                🎉 Goal complete! Legendary legs achieved!
            </p>
        ) : (
            <button onClick={onLog}>Log Session 💪</button>
        )}

        <button
            onClick={onReset}
            style={{
                marginTop: '12px',
                background: 'transparent',
                border: '1px solid #444',
                color: '#aaaaaa',
                fontSize: '0.85rem',
                padding: '8px',
            }}
        >
            Reset Goal
        </button>

        </div>
    );
}

export default Tracker;