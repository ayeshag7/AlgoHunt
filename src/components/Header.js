import logo from "../assets/logo.png";
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import backgroundImage from "../assets/footer-background.png";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const location = useLocation();

  // Function to determine if the given path is the current path
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#303032] border-b border-gray-600"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#111827',
      }}>

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" role="button" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-12" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">algoHunt</span>
        </a>
        
        <div className="flex max-md:w-full max-md:justify-between md:order-2 mt-0 max-md:mt-8 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <Link to="/login">
          <button type="button" className="text-white mx-2 max-md:mx-0 bg-transparent border-2 border-[#1fd1f8] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm max-md:px-3 px-4 py-2 text-center">Log In</button>
          </Link>

          <Link to="/signup">
          <button type="button" className="text-white bg-[#1fd1f8] hover:bg-[#35a2ba] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm max-md:px-3 px-4 py-2 text-center">Register for free</button>
          </Link>

          {/* Open Main Menu Button */}
          <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-[#1fd1f8] focus:outline-none focus:ring-2 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className={`${hidden ? "hidden" : ""} items-center max-md:mt-4 justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-600 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link to="/" className={`block py-2 px-3 ${isActive('/') ? 'text-[#1fd1f8]' : 'text-gray-300'} rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-[#1fd1f8] md:p-0`}>Home</Link>
            </li>
            <li>
              <Link to="/features" className={`block py-2 px-3 ${isActive('/features') ? 'text-[#1fd1f8]' : 'text-gray-300'} rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-[#1fd1f8] md:p-0`}>Features</Link>
            </li>
            <li>
              <Link to="/pricing" className={`block py-2 px-3 ${isActive('/pricing') ? 'text-[#1fd1f8]' : 'text-gray-300'} rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-[#1fd1f8] md:p-0`}>Pricing</Link>
            </li>
            <li>
              <Link to="/faq" className={`block py-2 px-3 ${isActive('/faq') ? 'text-[#1fd1f8]' : 'text-gray-300'} rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-[#1fd1f8] md:p-0`}>FAQ</Link>
            </li>
            <li>
              <Link to="/contact" className={`block py-2 px-3 ${isActive('/contact') ? 'text-[#1fd1f8]' : 'text-gray-300'} rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-[#1fd1f8] md:p-0`}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
