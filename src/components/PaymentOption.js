import React from "react";
import { FiCircle } from "react-icons/fi";

export const PaymentOption = ({ name }) => {
  return (
    <div className="flex flex-col justify-center px-6 py-6 mt-4 rounded-xl border border-solid border-slate-600 shadow-[0px_4px_4px_rgba(0,0,0,0.07)] max-md:px-5 max-md:max-w-full">
      <button>
        <div className="flex gap-2.5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div className="text-lg text-white">{name}</div>
            <div className="flex flex-col justify-center px-px py-0.5">
            <FiCircle className="shrink-0 text-slate-400" size={21} />
            </div>
        </div>
      </button>
    </div>
  );
}
