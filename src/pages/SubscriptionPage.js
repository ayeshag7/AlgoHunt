import React from 'react';
import { SubscriptionCard, Logo } from '../components';
import backgroundImage from "../assets/background-image.jpg";

const subscriptionData = [
  {
    title: 'Activation Code',
    price: 'Free',
    featured: false,
    benefits: [
      'Voice & Support Group',
      'Discount & Promotions',
      'Exclusive Events',
      'Membership Certificate',
      'Remote internet payment gateway'
    ]
  },
  {
    title: 'Standard',
    price: '$3',
    featured: true,
    benefits: [
      'Voice & Support Group',
      'Discount & Promotions',
      'Exclusive Events',
      'Membership Certificate',
      'Remote internet payment gateway'
    ]
  }
];

export const SubscriptionPage = () => {
  return (
    <main
      className="flex flex-wrap flex-col min-h-screen max-md:px-4 max-md:py-4 px-12 py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#111827',
      }}
    >
        <Logo />

        <div className='flex max-md:flex-wrap justify-center max-md:mt-6 mt-6 mb-12'>

            <section className="flex flex-col items-start self-center px-16 pt-12 pb-20 mt-6 bg-gray-500 bg-opacity-10 rounded-[32px] w-full max-w-[743px] max-md:px-5 max-md:mt-6">
            <h1 className="text-3xl font-bold text-white">Sign Up</h1>
            <p className="mt-2.5 text-base text-slate-400">
                Select a subscription to continue
            </p>
            <div className="self-stretch mt-12 mb-2.5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                {subscriptionData.map((subscription, index) => (
                    <SubscriptionCard key={index} {...subscription} />
                ))}
                </div>
            </div>
            </section>
        </div>
      
    </main>
  );
}
