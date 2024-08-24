import React from 'react';

// Unified Component
export const HowItWorks = () => {
  // Steps data
  const steps = [
    {
      number: '01',
      title: 'Enter Your Domain Name',
      description: 'Simply type in the domain name that you already own into the provided field. Our system will identify your domain registrar automatically. This step ensures that we can configure your email settings correctly without you needing to provide any technical details.'
    },
    {
      number: '02',
      title: 'Choose Your Email Address',
      description: 'Specify the email address you want, like sales@yourdomain.com. This personalized email will help you maintain a professional appearance. Our platform will validate the availability of the address and proceed to the next step once confirmed.'
    },
    {
      number: '03',
      title: 'Automated Setup and Start Using Your Email',
      description: 'Our software will handle all the technical configurations with your domain registrar, setting up your email account seamlessly. Once the setup is complete, you\'ll receive an "Email Account Created" notification and can start using your new email address immediately.'
    }
  ];

  // Individual step item component
  const StepItem = ({ number, title, description, isLast }) => (
    <div className="flex gap-5 items-start mt-12 max-md:flex-wrap max-md:mt-10">
      <div className="flex flex-col text-xl font-bold text-black whitespace-nowrap">
        <div className="px-4 bg-teal-400 mt-4 rounded-full h-[50px] w-[50px] flex items-center justify-center">
          {number}
        </div>
        {!isLast && (
          <div className="shrink-0 max-md:hidden self-center mt-4 bg-transparent border-dashed bg-opacity-80 border-[3px] border-gray-600 rounded-lg h-[123px]" />
        )}
      </div>
      <div className="flex flex-col grow shrink-0 mt-5 basis-0 w-fit max-md:max-w-full">
        <h3 className="text-2xl font-bold text-white max-md:max-w-full">{title}</h3>
        <p className="px-6 py-6 mt-6 text-base leading-6 rounded-3xl bg-indigo-100 bg-opacity-10 text-slate-400 max-md:px-5 max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="flex justify-center items-center px-16 py-20 bg-transparent max-md:px-5">
      <div className="flex flex-col px-12 mt-24 w-full max-w-[1097px] max-md:px-5 max-md:mt-4 max-md:max-w-full">
        <h2 className="self-center max-md:text-3xl text-4xl text-white font-bold">How It Works</h2>
        <p className="self-center mt-3 max-md:text-xl text-2xl text-center text-slate-400 max-md:max-w-full">
          Discover Our Best trading strategies here!
        </p>
        {steps.map((step, index) => (
          <StepItem
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
};