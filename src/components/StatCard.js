import React from 'react';

export const StatCard = ({ icon, title, value }) => {
  return (
    <article className="flex flex-wrap flex-col w-[28%] max-md:ml-0 max-md:w-[32%]">
      <div className="flex flex-col grow items-start py-7 pr-20 pl-6 w-full bg-indigo-100 bg-opacity-10 rounded-[32px] max-md:px-5 max-md:mt-4">
        <div className="flex flex-col justify-center items-start pl-8 py-3 max-w-full bg-gray-700 rounded-[1190px] w-[150px] max-md:pr-5">
          {icon}
        </div>
        <h3 className="mt-3 text-2xl font-bold tracking-wide text-white">
          {title}
        </h3>
        <p className="mt-7 text-4xl font-bold tracking-wide text-white">
          {value}
        </p>
      </div>
    </article>
  );
}
