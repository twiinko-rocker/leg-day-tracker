import { useState } from "react";

const SessionHistory = ({ sessions }) => {
    const [isExpanded, setIsExpanded] = useState(false); // State to track whether the session history is expanded or collapsed

    const toggleExpand = () => {
        setIsExpanded(!isExpanded); // Toggle the expanded state when the button is clicked
    };

    return (
        <div>
            <h2>Session History</h2>
            <button onClick={toggleExpand}>
                {isExpanded ? "▲" : "▼"} Session History
            </button>
            {isExpanded && (
                <ul>
                    {sessions.map((session, index) => (
                        <li key={index}>
                            Session {index + 1} - {new Date(session.date).toLocaleDateString()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SessionHistory;