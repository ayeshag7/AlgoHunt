import React from 'react';
import { FiMail, FiFileText, FiFile, FiPlus } from 'react-icons/fi';
import { InboxTable, StatCard, SearchBar, UserGreeting, SideBar } from '../../components';

export const DashboardHome = () => {
  const statCards = [
    { icon: <FiMail className="text-cyan-400 w-6 h-6" />, title: "Unread Mails", value: "1,024" },
    { icon: <FiFileText className="text-cyan-400 w-6 h-6" />, title: "Templates", value: "36" },
    { icon: <FiFile className="text-cyan-400 w-6 h-6" />, title: "Drafts", value: "5" }
  ];

  return (
    <main className="flex gap-x-8 max-w-screen bg-gray-950 max-md:px-5">
      <SideBar/>
      <div className='py-12 ml-4'>
        <header className="flex gap-5 self-center w-full max-w-[996px] max-md:flex-wrap max-md:max-w-full">
          <h1 className="flex-auto my-auto text-3xl font-bold text-white">
            Dashboard
          </h1>
          <SearchBar />
        </header>

        <UserGreeting />

        <section className="self-end mt-8 max-w-full w-[996px] max-md:pr-5">
          <div className="flex gap-5 max-md:flex-col">
            {statCards.map((card, index) => (
              <StatCard key={index} {...card} />
            ))}
          </div>
        </section>

        <h2 className="self-end mt-16 mb-8 max-md:hidden text-3xl font-bold text-white max-md:max-w-full">
          Inbox
        </h2>

        <InboxTable />

        <button className="flex justify-center ml-2 items-center self-end p-5 mt-16 rounded-full w-[72px] max-md:mt-10 bg-cyan-400" aria-label="Add new item">
          <FiPlus className="w-8 h-8 text-white" />
        </button>
      </div>
    </main>
  );
};
