import React from "react";

export const NavigationButtons = () => {
  return (
    <div className="flex gap-3 mt-40 text-base font-bold tracking-normal text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <button className="flex-1 px-12 py-4 rounded-xl max-md:px-5 bg-transparent border border-cyan-400">
        Go Back
      </button>
      <button className="flex-1 px-12 py-4 whitespace-nowrap rounded-xl max-md:px-5 bg-cyan-400">
        Next
      </button>
    </div>
  );
}
