// pages/_app.js

// Import the global styles
// import '../styles/globals.css';

// Import Tailwind CSS
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;