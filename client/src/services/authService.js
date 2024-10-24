const API_BASE_URL = 'https://villa-bnb-server.onrender.com'; // 

export const signUp = async (name, email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Signup failed');
        }

        const data = await response.json();
        console.log('Signup successful:', data);
        return data; // Return the user data
    } catch (error) {
        console.error('Error signing up:', error);
        throw error; // Rethrow the error for handling in the component
    }
};