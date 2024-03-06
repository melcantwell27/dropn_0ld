// Define the base URL of your Django API
const BASE_URL = 'http://localhost:8000';

export async function fetchClassList() {
  try {
    const response = await fetch(`${BASE_URL}/classes/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching class list:', error);
    throw error;
  }
}

// Function to fetch classes for the currently authenticated user from the API
export async function fetchStudentClasses() {
  try {
    // Make a GET request to the endpoint for fetching classes for the logged-in user
    const response = await fetch(`${BASE_URL}/my/classes/`);
    // Parse the response as JSON
    const data = await response.json();
    // Return the fetched student classes
    return data;
  } catch (error) {
    // Log and throw an error if fetching student classes fails
    console.error('Error fetching student classes:', error);
    throw error;
  }
}


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

// utils/api.js

export const createNewClass = async (formData) => {
  try {
    const response = await fetch('http://localhost:8000/classes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error creating class:', error);
  }
};
