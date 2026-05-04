export const createGoal = async (goal) => {
    const response = await fetch('/api/goal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal })
    });
    return response.json();
};