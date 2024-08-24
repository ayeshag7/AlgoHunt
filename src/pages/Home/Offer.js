import React from 'react';
import { MdSettings, MdIntegrationInstructions, MdOutlineAutoAwesome, MdLabel } from 'react-icons/md'; // Example icons from Material Design

export const Offer = () => {
  // Data for offer cards with react-icons
  const offerData = [
    {
      icon: <MdSettings size={24} className="text-gray-400" />,
      title: "Automated Setup",
      description: "Set up your custom email in minutes with our easy 3-step process.",
    },
    {
      icon: <MdIntegrationInstructions size={24} className="text-gray-400" />,
      title: "Seamless Integration",
      description: "Works with major domain registrars like GoDaddy, NameCheap, and HostGator.",
    },
    {
      icon: <MdOutlineAutoAwesome size={24} className="text-gray-400" />,
      title: "AI-Powered Tools",
      description: "Use AI writing assistant and template builder to craft perfect emails.",
    },
    {
      icon: <MdLabel size={24} className="text-gray-400" />,
      title: "White Label Capabilities",
      description: "Customize the platform to match your brand.",
    },
  ];

  // Individual offer card component
  const OfferCard = ({ icon, title, description }) => (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start px-11 pt-6 pb-12 w-full bg-indigo-100 bg-opacity-10 rounded-[32px] max-md:px-5 max-md:mt-7 max-md:max-w-full">
        <div className="flex justify-center items-center p-4 rounded-full border-4 border-solid border-slate-500 border-opacity-50 w-[63px]">
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
        <p className="mt-1.5 text-sm max-md:w-56 text-cyan-400 w-[284px]">{description}</p>
      </div>
    </div>
  );

  return (
    <section className="flex flex-col items-center p-20 bg-transparent max-md:px-5">
      <h2 className="mt-20 max-md:text-3xl text-4xl text-white font-bold max-md:mt-10">What We Offer</h2>
      <p className="mt-3 max-md:text-xl text-2xl text-center text-slate-400 max-md:max-w-full">
        Discover Our Best trading strategies here!
      </p>
      <div className="flex flex-col px-16 mt-12 w-full max-w-[1097px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {offerData.slice(0, 2).map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>
        </div>
        <div className="mt-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {offerData.slice(2).map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
