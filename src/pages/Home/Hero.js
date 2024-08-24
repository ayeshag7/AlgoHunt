import React from 'react';
import { FiYoutube, FiUsers, FiTrendingUp } from 'react-icons/fi';

// Unified Component
export const Hero = () => {
  // Data for statistics cards
  const statData = [
    {
      icon: <FiYoutube size={42} color="#22d3ee" />, 
      title: "Youtube Subscribers",
      value: "850,000+"
    },
    {
      icon: <FiUsers size={42} color="#22d3ee" />, 
      title: "Tiktok Followers",
      value: "450,000+"
    },
    {
      icon: <FiTrendingUp size={42} color="#22d3ee" />, 
      title: "Trading Experience",
      value: "10 Years+"
    }
  ];

  return (
    <main className="flex justify-center items-center px-16 py-20 bg-transparent max-md:px-5">
      <section className="flex flex-col items-center mt-28 max-w-full w-[918px] max-md:mt-10">
        <h1 className="max-md:text-4xl text-5xl font-bold text-center text-white max-md:max-w-full">
          Welcome to our All-in-one Email Management Solution.
        </h1>
        <p className="mt-6 max-md:text-xl text-2xl text-center text-slate-400 max-md:max-w-full">
          Easy and automated setup in just a few steps
        </p>
        <button className="px-8 py-3.5 mt-6 text-base font-bold text-white bg-cyan-400 rounded-xl max-md:px-5">
          Let's Get Started
        </button>
        <h2 className="mt-52 max-md:text-3xl text-4xl font-bold text-white text-center max-md:mt-32 max-md:max-w-full">
          The New Face of Technical Indicators
        </h2>
        <div className="self-stretch mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {statData.map((stat, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-14 py-11 w-full bg-indigo-100 bg-opacity-10 rounded-[32px] max-md:px-5 max-md:mt-8">
                  {stat.icon}
                  <h3 className="self-stretch mt-8 text-center text-lg font-bold text-white">{stat.title}</h3>
                  <p className="mt-5 text-2xl text-center text-cyan-400">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
