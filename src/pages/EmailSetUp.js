import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/logoAH.png';
import backgroundImage from '../assets/background-image.jpg';

export const EmailSetUp = () => {
  return (
    <main
      className="flex flex-wrap flex-col min-h-screen max-md:px-4 max-md:py-4 px-12 py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#111827',
      }}
    >
      {/* Logo Section */}
      <Link to="/">
        <img src={logo} alt="Logo" className="w-44 mb-4" />
      </Link>

      {/* Form Section */}
      <section className="flex flex-col self-center px-16 py-12 mt-4 mb-8 max-w-full bg-gray-500 bg-opacity-10 rounded-[32px] w-[537px] max-md:px-5 max-md:mt-10">
        <h1 className="text-3xl font-bold text-white">Setup your email</h1>
        <p className="mt-2.5 text-base text-slate-400">
          Enter the information below to finalize your email address
        </p>
        <form>
          {/* Domain Name Input */}
          <div className="mt-6">
            <label className="text-lg text-slate-400">Enter your domain name</label>
            <input
              type="text"
              placeholder="Enter Here"
              className="w-full px-6 py-4 mt-1 tracking-normal leading-[137.5%] rounded-xl border border-solid border-slate-400 text-neutral-600 max-md:px-5 bg-transparent"
            />
          </div>

          {/* Email Input */}
          <div className="mt-6">
            <label className="text-lg text-slate-400">Email</label>
            <input
              type="email"
              placeholder="sale@yourdomain.com"
              className="w-full px-6 py-4 mt-1 tracking-normal leading-[137.5%] rounded-xl border border-solid border-slate-400 text-neutral-600 max-md:px-5 bg-transparent"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8 tracking-normal text-white">
            <Link to="/subscription">
              <button className="flex-1 px-12 py-4 rounded-xl bg-gray-800 border border-cyan-400 max-md:px-5">
                Go Back
              </button>
            </Link>
            <Link to="/email-success">
              <button className="flex-1 px-12 py-4 whitespace-nowrap rounded-xl bg-cyan-400 max-md:px-5">
                Next
              </button>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};
