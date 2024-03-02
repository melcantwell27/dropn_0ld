export async function fetchClassList() {
    const response = await fetch('http://localhost:8000/classes/');
    const data = await response.json();
    return data;
  }

  // utils/api.js

// Define the base URL of your Django API
const BASE_URL = 'http://localhost:8000';

// Function to make a POST request to the /register/ endpoint
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data; // Return the response data
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Throw the error for handling in the component
  }
};

// Function to make a POST request to the /login/ endpoint
export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data; // Return the response data
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error; // Throw the error for handling in the component
  }
};
