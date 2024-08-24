import React from "react";
import { PaymentOption, NavigationButtons, Logo } from "../components";
import backgroundImage from "../assets/background-image.jpg";

export const PurchasePage = () => {
  const paymentOptions = [
    { name: "Credit/Debit Card" },
    { name: "Paypal" }
  ];

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
      <section className="flex flex-col self-center px-16 py-12 mt-10 mb-16 bg-gray-500 bg-opacity-10 rounded-[32px] w-full max-w-[743px] max-md:px-5 max-md:mt-10">
        <h1 className="text-3xl font-bold text-white">Sign Up</h1>
        <p className="mt-2.5 text-base text-slate-400">Select a payment method</p>
        {paymentOptions.map((option, index) => (
          <PaymentOption key={index} name={option.name} />
        ))}
        <NavigationButtons />
      </section>
    </main>
  );
}
