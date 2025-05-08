import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';


const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow p-4">
    <div className={`flex ${isLoggedIn ? 'justify-end' : 'justify-center'}`}>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      ) : (
        <div className="space-x-4">
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>
      )}
    </div>
  </header>
  );
};

export default Header;

