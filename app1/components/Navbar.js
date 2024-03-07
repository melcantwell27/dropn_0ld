import Link from 'next/link';
import { logoutUser } from '../utils/api';

const Navbar = ({ isLoggedIn }) => {
  const handleLogout = async () => {
    try {
      const success = await logoutUser();
      if (success) {
        // Perform any additional logout actions if needed
        console.log('Logout successful');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-lime-500 p-4">
      <div className="max-w-7xl mx-auto px-4 justify-between items-center">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-black text-2xl  font-semibold">All Classes</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/my-spot">
                  <span className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium transition-colors duration-300">
                    My Spot
                  </span>
                </Link>
                <Link href="/about">
                  <span className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium transition-colors duration-300">
                    About
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {isLoggedIn ? (
                <button onClick={handleLogout} className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium transition-colors duration-300">Logout</button>
              ) : (
                <>
                  <Link href="/login">
                    <span className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium transition-colors duration-300">Login</span>
                  </Link>
                  <Link href="/register">
                    <span className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium transition-colors duration-300">Register</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
