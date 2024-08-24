import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/logoAH.png';
import backgroundImage from '../assets/background-image.jpg';

export const EmailSuccess = () => {
  return (
    <main className="flex flex-wrap flex-col min-h-screen max-md:px-4 max-md:py-4 px-12 py-10"
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#111827',
      }}>
      
      {/* Logo Section */}
      <Link to="/">
        <img src={logo} alt="Logo" className="w-44 mb-4" />
      </Link>

      {/* Email Creation Card Section */}
      <section className="flex flex-col self-center items-center px-16 py-12 mt-4 mb-8 max-w-full bg-gray-500 bg-opacity-10 rounded-[32px] w-[537px] max-md:px-5 max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a4e9a09315c14fa490a9fcd8c77b064136db056ce9ba74e0bac1b5748f25364?apiKey=86a6ac88689a433c814ee3adda3c6435&&apiKey=86a6ac88689a433c814ee3adda3c6435"
          alt="Success"
          className="max-w-full aspect-square w-[113px]"
        />
        <h2 className="mt-8 max-md:text-2xl text-3xl text-center text-white font-bold">Email Account Created</h2>
        <p className="mt-2.5 max-md:text-sm text-base text-center text-slate-400">
          Your account has been created successfully.
        </p>
        <button className="px-12 py-4 mt-8 tracking-normal rounded-xl bg-cyan-400 text-white max-md:px-5">
          Access Mail Now
        </button>
      </section>
      
    </main>
  );
};
