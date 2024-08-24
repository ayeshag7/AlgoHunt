import React from "react";
import { SideBar } from "../../components";
import { FiCamera, FiTrash2 } from "react-icons/fi"; // Importing icons from React Icons

// Unified Component
export const ProfilePage = () => {
  // Profile picture component
  const ProfilePicture = () => (
    <section className="flex flex-col items-center">
      <div className="relative max-w-full aspect-square rounded-full w-[126px] max-md:mt-10 bg-indigo-100 flex items-center justify-center text-gray-600 text-xl">
        <span>User</span>
      </div>
      <div className="flex gap-3 mt-8 text-sm font-bold tracking-normal">
        <button className="flex items-center bg-cyan-400 gap-2 px-6 py-3.5 text-white rounded-xl max-md:px-5">
          <FiCamera />
          Change Picture
        </button>
        <button className="flex items-center border border-cyan-400 gap-2 px-6 py-3.5 text-red-800 rounded-xl bg-transparent max-md:px-5">
          <FiTrash2 />
          Delete Picture
        </button>
      </div>
    </section>
  );

  // Profile field component
  const ProfileField = ({ label, description, placeholder }) => (
    <div className="flex gap-5 justify-between mt-4 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col my-auto font-light">
        <label htmlFor={label.toLowerCase().replace(" ", "-")} className="text-xl text-white">
          {label}
        </label>
        <div className="text-sm text-zinc-500">{description}</div>
      </div>
      <input
        type="text"
        id={label.toLowerCase().replace(" ", "-")}
        placeholder={placeholder}
        className="px-6 py-4 text-base tracking-normal leading-6 rounded-xl bg-transparent border border-solid border-slate-400 text-zinc-500 max-md:px-5"
      />
    </div>
  );

  return (
    <main className="flex gap-x-8 p-0 max-w-screen bg-gray-950 max-md:px-5">
      <SideBar/>
      <div className="py-12 ml-4 w-full">
        <header className="self-end text-3xl font-bold text-white max-md:max-w-full">
          Profile
        </header>
        <div className="flex flex-col max-md:px-4 gap-y-12 w-full px-8">
          <ProfilePicture />
          <section className="w-full max-w-[996px]">
            <ProfileField
              label="Profile Name"
              description="Once changed, you cannot change it for 60 days."
              placeholder="Profile _Name"
            />
            <ProfileField
              label="Username"
              description="Once changed, you cannot change it for 60 days."
              placeholder="Username"
            />
          </section>
        </div>
      </div>
    </main>
  );
};
