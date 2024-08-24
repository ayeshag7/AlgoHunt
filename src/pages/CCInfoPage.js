import React, { useState } from 'react';
import {Link} from "react-router-dom";
import backgroundImage from '../assets/background-image.jpg';
import logo from '../assets/logoAH.png';
import { FiCheckCircle } from 'react-icons/fi';

const paymentMethods = [
  { name: 'Credit/Debit Card' },
  { name: 'Paypal' }
];

const fields = [
  { label: 'Cardholder Name', placeholder: 'Enter Here' },
  { label: 'Card Number', placeholder: '**** **** **** ****' },
  { label: 'Expiry', placeholder: 'MM/YY' },
  { label: 'CVV', placeholder: '***' }
];

export const CCInfoPage = () => {
  // State to manage the selected payment method
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].name);

  // Function to render input fields for the selected payment method
  const renderInputFields = () => {
    return (
      <>
        {fields.slice(0, 2).map((field, index) => (
          <div key={index} className="mt-5 mb-3">
            <label className="text-lg font-bold text-slate-400">{field.label}</label>
            <input
              type="text"
              placeholder={field.placeholder}
              className="w-full px-6 py-3 mt-1 text-base tracking-normal leading-6 rounded-xl border border-solid border-slate-400 bg-transparent text-neutral-600 max-md:px-5"
            />
          </div>
        ))}
        <div className="flex gap-4 mt-5">
          {fields.slice(2).map((field, index) => (
            <div key={index} className="flex-1">
              <label className="text-lg font-bold text-slate-400">{field.label}</label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full px-6 py-3 mt-1 text-base tracking-normal leading-6 rounded-xl border border-solid border-slate-400 bg-transparent text-neutral-600 max-md:px-5"
              />
            </div>
          ))}
        </div>
      </>
    );
  };

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
      {/* Logo Section */}
      <Link to="/">
        <img src={logo} alt="Logo" className="w-44 mb-4" />
      </Link>
      
      {/* Form Section */}
      <section className="flex flex-col items-start self-center px-16 py-12 bg-gray-500 bg-opacity-10 rounded-[32px] w-full max-w-[743px] mb-8 max-md:px-5 max-md:mt-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white">Sign Up</h1>
        <p className="mt-2.5 text-base text-slate-400">Select a payment method</p>
        
        {/* Payment Method Option: Credit/Debit Card */}
        <div
          className="flex items-center justify-between w-full px-6 py-4 mt-8 mb-6 rounded-xl border border-solid border-slate-600 bg-gray-800 max-md:px-5 cursor-pointer"
          onClick={() => setSelectedMethod('Credit/Debit Card')}
        >
          <div className="text-lg text-white">Credit/Debit Card</div>
          {selectedMethod === 'Credit/Debit Card' ? (
            <FiCheckCircle className="text-cyan-400" size={21} />
          ) : (
            <div className="w-5 h-5 border-2 border-solid border-slate-400 rounded-full" />
          )}
        </div>
        
        {/* Input Fields for Credit/Debit Card */}
        {selectedMethod === 'Credit/Debit Card' && renderInputFields()}
        {selectedMethod === 'Credit/Debit Card' && (
          <button className="px-5 py-3 mt-5 text-base font-bold tracking-normal text-neutral-500 border border-solid border-sky-600 rounded-xl">
            Add Card
          </button>
        )}

        {/* Payment Method Option: Paypal */}
        <div
          className="flex items-center justify-between w-full px-6 py-4 mt-8 rounded-xl border border-solid border-slate-600 bg-gray-800 max-md:px-5 cursor-pointer"
          onClick={() => setSelectedMethod('Paypal')}
        >
          <div className="text-lg text-white">Paypal</div>
          {selectedMethod === 'Paypal' ? (
            <FiCheckCircle className="text-cyan-400" size={21} />
          ) : (
            <div className="w-5 h-5 border-2 border-solid border-slate-400 rounded-full" />
          )}
        </div>

        {/* Input Fields for Paypal */}
        {selectedMethod === 'Paypal' && renderInputFields()}

        {/* Navigation Buttons */}
        <div className="flex justify-between self-stretch mt-12 text-base font-bold tracking-normal text-white max-md:flex-wrap max-md:mt-10">
          <Link to="/subscription">
            <button className="flex-1 px-12 py-4 mr-2 rounded-xl bg-gray-800 border border-cyan-400 max-md:px-5">
              Go Back
            </button>
          </Link>
          <Link to="/email-setup">
            <button className="flex-1 px-12 py-4 ml-2 rounded-xl bg-cyan-400 max-md:px-5">
              Next
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
