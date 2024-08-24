import {Link} from "react-router-dom";

import { FaEye } from 'react-icons/fa';

export const SignUpForm = () => {
  return (
    <form>
      <div className="flex gap-5 my-4 max-md:flex-wrap max-md:gap-3 max-md:my-4">
        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="first-name" className="tracking-normal text-slate-400">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="p-3.5 mt-2 text-base tracking-normal whitespace-nowrap rounded-xl border border-solid border-slate-400 text-neutral-500 bg-transparent max-md:max-w-full"
            placeholder="First Name"
          />
        </div>
        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="last-name" className="tracking-normal text-slate-400">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="p-3.5 mt-2 text-base tracking-normal whitespace-nowrap rounded-xl border border-solid border-slate-400 text-neutral-500 bg-transparent max-md:max-w-full"
            placeholder="Last Name"
          />
        </div>
      </div>

      <label htmlFor="email" className="mt-4 tracking-normal text-slate-400 max-md:mt-4 max-md:max-w-full">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="p-3.5 mt-2 text-base tracking-normal whitespace-nowrap rounded-xl border border-solid border-slate-400 text-neutral-500 max-md:pr-5 max-md:max-w-full w-full bg-transparent"
        placeholder="Ale**********@gmail.com"
      />

      <label htmlFor="password" className="mt-4 tracking-normal text-slate-400 max-md:max-w-full block">
        Password
      </label>
      <div className="flex gap-2.5 justify-between p-3.5 mt-2 text-base tracking-normal whitespace-nowrap rounded-xl border border-solid border-slate-400 text-neutral-500 max-md:flex-wrap max-md:max-w-full bg-transparent">
        <input
          type="password"
          id="password"
          className="flex-grow bg-transparent border-none outline-none"
          placeholder="***********"
        />
        <FaEye className="shrink-0 w-5 aspect-square text-slate-400 cursor-pointer" />
      </div>

      <label htmlFor="confirm-password" className="mt-4 tracking-normal text-slate-400 max-md:max-w-full block">
        Confirm Password
      </label>
      <div className="flex gap-2.5 justify-between p-3.5 mt-2 text-base tracking-normal whitespace-nowrap rounded-xl border border-solid border-slate-400 text-neutral-500 max-md:flex-wrap max-md:max-w-full bg-transparent">
        <input
          type="password"
          id="confirm-password"
          className="flex-grow bg-transparent border-none outline-none"
          placeholder="***********"
        />
        <FaEye className="shrink-0 w-5 aspect-square text-slate-400 cursor-pointer" />
      </div>

      <Link to="/subscription">
        <button
          type="submit"
          className="px-8 py-4 mt-8 text-lg font-bold text-black bg-cyan-400 whitespace-nowrap rounded-xl max-md:px-5 max-md:max-w-full w-full border border-solid border-cyan-400"
        >
          Sign Up
        </button>
      </Link>

      <div className="flex items-center justify-center mt-10 mb-4">
        <div className="h-px bg-stone-300 flex-1 max-md:hidden" />
        <span className="px-4 text-zinc-500">or</span>
        <div className="h-px bg-stone-300 flex-1 max-md:hidden" />
      </div>
    </form>
  );
};
