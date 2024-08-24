import React from 'react';
import { Logo, SignUpForm, SocialLogin, SignInPrompt } from "../components";
import backgroundImage from "../assets/background-image.jpg";

export const SignUpPage = () => {
  return (
    <main
      className="px-20 max-md:pt-4 pt-16 pb-20 max-md:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#111827'
      }}
    >
      <div className="flex justify-center gapx-12 gapy-5 max-md:flex-col">
        <Logo />

        <section className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-16 py-12 my-auto w-full text-sm bg-indigo-100 bg-opacity-10 rounded-[32px] max-md:px-8 max-md:mt-10 max-md:max-w-full">
            <h1 className="self-start text-3xl font-bold text-white">SignUp</h1>
            <p className="self-start mt-2.5 text-base text-slate-400 mb-8">
              Enter the information down below to continue to <span className="text-cyan-400">algoHunt</span>
            </p>
            <SignUpForm />
            <SocialLogin />
            <SignInPrompt />
          </div>
        </section>
      </div>
    </main>
  );
}
