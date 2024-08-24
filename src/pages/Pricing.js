import React from 'react';
import { Header, Footer } from "../components";
import { FiCheckCircle } from 'react-icons/fi';

import backgroundImage from "../assets/home-background.png";

export const Pricing = () => {
  // Data for pricing plans
  const pricingData = [
    {
      title: "Activation Code",
      price: "Free",
      features: [
        "Voice & Support Group",
        "Discount & Promotions",
        "Exclusive Events",
        "Membership Certificate",
        "Remote internet payment gateway"
      ],
      buttonText: "Subscribe",
      isFeatured: false
    },
    {
      title: "Standard",
      price: "$3",
      subtext: "per email address",
      features: [
        "Voice & Support Group",
        "Discount & Promotions",
        "Exclusive Events",
        "Membership Certificate",
        "Remote internet payment gateway"
      ],
      buttonText: "Subscribe",
      isFeatured: true
    }
  ];

  // Individual pricing card component
  const PricingCard = ({ title, price, subtext, features, buttonText, isFeatured }) => (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className={`flex flex-col grow justify-center text-xs tracking-normal rounded-none text-slate-400 max-md:mt-5 ${isFeatured ? 'pb-0' : ''}`}>
        <div className={`flex flex-col px-8 py-7 relative w-full bg-gray-800 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.07)] max-md:px-5 ${isFeatured ? 'pb-7' : ''}`}>
          {isFeatured && (
            <div className="self-end px-6 py-2 bg-cyan-400 max-w-full text-sm font-bold tracking-normal text-white whitespace-nowrap rounded-xl w-[116px] max-md:px-5 absolute top-0 right-0">
              Featured
            </div>
          )}
          <h3 className="text-base font-bold tracking-wider text-zinc-100">{title}</h3>
          <div className="flex gap-2 mt-4">
            <div className="text-3xl font-bold tracking-widest text-zinc-100">{price}</div>
            {subtext && (
              <div className="flex-auto self-start mt-3.5 text-xs tracking-normal text-gray-500">
                {subtext}
              </div>
            )}
          </div>
          <h4 className="mt-7 text-sm font-semibold tracking-normal text-indigo-100">Benefits</h4>
          {features.map((feature, index) => (
            <div key={index} className="flex gap-2 mt-1">
              <FiCheckCircle className="shrink-0 w-6 text-cyan-400" alt="" />
              <div className="my-auto">{feature}</div>
            </div>
          ))}
          <button
            className={`px-12 py-2.5 mt-12 text-sm font-bold tracking-normal whitespace-nowrap rounded-xl max-md:px-5 max-md:mt-10 ${
              title === "Standard" ? 'bg-cyan-400 text-white' : 'border border-cyan-400 text-cyan-400 bg-transparent'
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#111827',
    }}>
      <Header />
      <section className="flex justify-center items-center px-16 max-md:mx-8 mx-28  py-20 bg-transparent max-md:px-5">
        <div className="mt-8 mb-12 w-full max-w-[1226px] max-md:mt-2 max-md:max-w-full">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-slate-400">Check out our affordable pricing plans</p>
          </div>
          <div className="flex gap-5 max-md:flex-col mt-12">
            {pricingData.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
