import React from 'react';
import { FiSearch, FiPlus, FiPlusCircle } from 'react-icons/fi';
import {SideBar} from "../../components";

// Unified Template Page Component
export const Templates = () => {
  // Recent templates data
  const recentTemplates = [
    {
      title: "Newsletter Template",
      description: "A clean and modern newsletter template for your business.",
    },
    {
      title: "Sales Report Template",
      description: "A comprehensive template for presenting your sales data.",
    }
  ];

  // All templates data
  const allTemplates = [
    {
      title: "Event Invitation",
      description: "A stylish template for event invitations and announcements.",
    },
    {
      title: "Company Profile",
      description: "A professional template for showcasing your company.",
    },
    {
      title: "Product Launch",
      description: "An engaging template for announcing new products.",
    }
  ];

  // Search bar component
  const SearchBar = () => (
    <div className="flex gap-1.5 px-2.5 py-2 text-sm rounded-xl bg-zinc-300 bg-opacity-30 text-stone-300">
      <FiSearch className="shrink-0 w-6 h-6" />
      <input
        type="text"
        placeholder="Search by people, template, messages"
        className="my-auto bg-transparent border-none focus:outline-none"
      />
    </div>
  );

  // Template card component
  const TemplateCard = ({ title, description }) => (
    <article className="flex flex-col grow pb-6 w-full text-white bg-indigo-100 bg-opacity-10 rounded-[32px] max-md:mt-4">
      <div className="md:w-full aspect-[1.79] bg-gray-700 rounded-t-[32px]" />
      <div className="flex flex-col px-4 mt-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3.5 text-base font-light">{description}</p>
        <div className="flex gap-4 self-end mt-3 text-sm font-bold tracking-normal whitespace-nowrap">
          <FiPlusCircle className="shrink-0 my-auto w-6 h-6" />
          <button className="px-8 py-3 rounded-xl max-md:px-5">Use</button>
        </div>
      </div>
    </article>
  );

  return (
    <main className="flex bg-gray-950 gap-x-8 max-md:px-5">

      <SideBar/>

      <div className='py-12'>
      <header className="flex gap-5 self-center w-full max-w-[996px] max-md:flex-wrap max-md:max-w-full">
        <h1 className="flex-auto text-3xl font-bold text-white">Templates</h1>
        <SearchBar />
      </header>
      
      <section className="mt-16 w-full max-w-[996px] max-md:mt-10 max-md:max-w-full">
        <h2 className="text-2xl font-bold text-white">Recently used</h2>
        <div className="mt-6 max-w-full max-md:w-[366px] w-[996px] max-md:pr-5">
          <div className="flex gap-5 max-md:flex-col">
            {recentTemplates.map((template, index) => (
              <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <TemplateCard {...template} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="mt-8 w-full max-w-[996px] max-md:max-w-full">
        <h2 className="text-2xl font-bold text-white">All Templates</h2>
        <div className="mt-6 max-w-full max-md:w-[366px] w-[1116px] max-md:pr-5">
          <div className="flex gap-5 max-md:flex-col">
            {allTemplates.map((template, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <TemplateCard {...template} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <button className="flex justify-center bg-cyan-400 items-center p-5 mt-8 rounded-[1000px] w-[78px]" aria-label="Add new template">
        <FiPlus className="w-full h-full text-white" />
      </button>
      </div>

    </main>
  );
};
