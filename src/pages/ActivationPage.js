import React from 'react';
import {Link} from "react-router-dom";
import backgroundImage from "../assets/background-image.jpg";
import logo from "../assets/logoAH.png";

export const ActivationPage = () => {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#111827', 
      }}
    >
      <div className="flex flex-col justify-start w-full max-w-screen-sm mx-auto">
        <img src={logo} alt="algoHunt Logo" className="mb-8 ml-10 w-32 md:w-40 lg:w-48" />

        <section className="flex flex-col self-center px-8 max-md:px-6 py-8 bg-indigo-100 bg-opacity-10 rounded-3xl w-full max-w-md lg:max-w-lg">
          <header>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Sign Up</h1>
            <p className="mt-2 text-sm md:text-base text-slate-400">Enter the code to continue</p>
          </header>
          <div>
            <label htmlFor="activationCode" className="block mt-6 md:mt-8 text-base md:text-xl text-slate-400">
              Enter Activation Code
            </label>
            <input
              type="text"
              id="activationCode"
              className="p-3 mt-2 md:mt-4 w-full text-sm md:text-base tracking-normal whitespace-nowrap rounded-xl border border-solid border-slate-400 text-neutral-500"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              aria-label="Enter Activation Code"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-6 text-sm font-bold tracking-normal">
            <Link to="/subscription">
              <button className="flex-1 px-4 py-3 rounded-xl bg-gray-700 text-white">
                Go Back
              </button>
            </Link>
            <Link to="/email-setup">
              <button className="flex-1 px-4 py-3 rounded-xl bg-cyan-400 text-white">
                Subscribe
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
