import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary-300 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-white">
          {/* <img src={CompanyLogo} alt="Company Logo" className="h-8 w-8 mr-2" /> */}
          <span className="text-white">Company Name</span>
        </Link>
      </div>

      <nav className="flex-grow flex justify-center">
        <Link to="/" className="text-white flex items-center mx-4">
          Home
        </Link>
        <Link to="/findjob" className="text-white flex items-center mx-4">
          Find Job
        </Link>
        <Link to="/company" className="text-white flex items-center mx-4">
          Company
        </Link>
        <Link to="/contact" className="text-white flex items-center mx-4">
          Contact
        </Link>
      </nav>

      <div className="flex items-center">
        <Link
          to="/signup"
          className="bg-accent-100 text-text-100 px-4 py-2 rounded-full mx-2 transition duration-300 ease-in-out hover:bg-accent-200 active:bg-accent-200"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="bg-primary-100 text-text-100 px-4 py-2 rounded-full mx-2 transition duration-300 ease-in-out hover:bg-primary-200 active:bg-primary-200"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
