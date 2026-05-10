export const checkPassword = async (password) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
    });
    return response.json();
};

export const createGoal = async (goal) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/goal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal })
    });
    return response.json();
};

export const logSession = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/goal/log`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
    });
    return response.json();
};

export const fetchGoal = async () => { // Function to fetch the current goal data from the backend API, sends a GET request to the /api/goal endpoint and returns the response as JSON. If the response status is 404 (not found), it returns null, indicating that there is no current goal set.
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/goal`);
    if (response.status === 404) return null;
    return response.json();
};

