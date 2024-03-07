// pages/_app.js

import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { checkUserLoggedIn } from '../utils/api'; // Import the function to check user login status

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check user login status when the component mounts
    const checkLoginStatus = async () => {
      try {
        const loggedIn = await checkUserLoggedIn(); // Implement this function to check if the user is logged in
        setIsLoggedIn(loggedIn);
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus(); // Call the function to check user login status
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={isLoggedIn} /> {/* Pass the isLoggedIn prop to the Navbar component */}
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default MyApp;
