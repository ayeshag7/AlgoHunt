import React from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Example icon

// Unified Component
export const PricingPlans = () => {
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
    <section className="flex justify-center items-center px-16 py-20 bg-transparent max-md:px-5">
      <div className="mt-24 w-full max-w-[1226px] max-md:mt-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:px-4 font-bold text-white max-md:mt-10 max-md:max-w-full">
              <h2 className="text-2xl max-md:max-w-full">Affordable Pricing Plans</h2>
              <p className="mt-6 max-md:text-base text-lg text-slate-400 max-md:max-w-full">
                Our platform offers flexible pricing to suit your needs. For just $3 per month per email address, you can enjoy professional email services with a 7-day free trial to get started. If you have an Activation Code from SitesGPT, you can access one email account for free.
              </p>
              <button className="self-start bg-cyan-400 px-8 py-3.5 mt-11 text-base rounded-xl max-md:px-5 max-md:mt-10">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {pricingData.map((plan, index) => (
                  <PricingCard key={index} {...plan} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
