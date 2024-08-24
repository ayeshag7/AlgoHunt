import React from 'react';
import {Link} from "react-router-dom";
import { BenefitItem } from './BenefitItem';

export const SubscriptionCard = ({ title, price, featured, benefits }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className={`flex flex-col grow justify-center text-xs tracking-normal rounded-none text-slate-400 max-md:mt-5 ${featured ? 'relative' : ''}`}>
        <div className="flex flex-col px-8 py-7 w-full bg-gray-800 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.07)] max-md:px-5">
          {featured && (
            <div className="flex justify-center items-center self-end bg-cyan-400 px-4 pt-2 pb-2 max-w-full text-base font-bold tracking-normal text-white whitespace-nowrap rounded-xl w-[116px] max-md:px-5 absolute top-0 bottom-96 right-0">
              Feature
            </div>
          )}
          <h2 className="text-base font-bold tracking-wider text-zinc-100">{title}</h2>
          <div className="mt-5 text-3xl font-bold tracking-widest text-zinc-100">
            {price}
            {price !== 'Free' && (
              <span className="flex-auto self-start mt-3.5 text-xs tracking-normal text-gray-500">
                per email address
              </span>
            )}
          </div>
          <h3 className="mt-7 text-sm font-semibold tracking-normal text-indigo-100">Benefits</h3>
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} text={benefit} />
          ))}
          <Link to={`${title === 'Activation Code' ? '/activation': '/ccinfo'}`}>
          <button
            className={`px-12 py-2.5 w-full mt-12 text-sm font-bold tracking-normal whitespace-nowrap rounded-xl max-md:px-5 max-md:mt-10 ${
              title === 'Activation Code'
                ? 'bg-transparent border border-cyan-400 text-cyan-400'
                : 'bg-cyan-400 text-white'
            }`}
          >
            Subscribe
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
