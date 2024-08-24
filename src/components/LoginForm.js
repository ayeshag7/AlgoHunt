import { FaEye, FaCheckSquare } from 'react-icons/fa';
import {Link} from "react-router-dom";

export const LoginForm = () => {
  return (
    <form>
      <label htmlFor="email" className="mt-12 tracking-normal text-slate-400 max-md:mt-4 max-md:max-w-full">
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
      <div className="flex justify-between items-center mt-3.5 w-full tracking-normal max-md:flex-wrap max-md:max-w-full">
        <label className="flex items-center gap-1.5 text-white">
          <input type="checkbox" className="sr-only" />
          <FaCheckSquare className="shrink-0 w-5 aspect-square text-blue-500" />
          <span>Remember me</span>
        </label>
        <button type="button" className="font-medium text-cyan-400 underline">
          Forgot Password?
        </button>
      </div>
      <button
        type="submit"
        className="px-8 py-4 mt-8 text-lg font-bold text-black bg-cyan-400 whitespace-nowrap rounded-xl max-md:px-5 max-md:max-w-full w-full border border-solid border-cyan-400"
      >
        <Link to="/dashboard-home">
        Login
        </Link>
      </button>
      <div className="flex items-center justify-center mt-10 mb-4">
        <div className="h-px bg-stone-300 flex-1 max-md:hidden" />
        <span className="px-4 text-zinc-500">or</span>
        <div className="h-px bg-stone-300 flex-1 max-md:hidden" />
      </div>
    </form>
  );
}
