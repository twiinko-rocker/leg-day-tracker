export const createGoal = async (goal) => {
    const response = await fetch('/api/goal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal })
    });
    return response.json();
};

export const logSession = async () => {
    const response = await fetch('/api/goal/log', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
    });
    return response.json();
};

export const fetchGoal = async () => { // Function to fetch the current goal data from the backend API, sends a GET request to the /api/goal endpoint and returns the response as JSON. If the response status is 404 (not found), it returns null, indicating that there is no current goal set.
    const response = await fetch('/api/goal');
    if (response.status === 404) return null;
    return response.json();
};

