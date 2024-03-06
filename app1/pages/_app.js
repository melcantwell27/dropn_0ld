// pages/_app.js

// Import the global styles
// import '../styles/globals.css';

// Import Tailwind CSS
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer /> {/* Include the Footer component */}
      </div>
    );
  }

export default MyApp;