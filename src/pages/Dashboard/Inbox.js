import React from 'react';
import { FiSearch, FiPlus, FiRewind, FiShare2, FiTrash2, FiPaperclip } from 'react-icons/fi';
import {SideBar} from "../../components";

// MessageDetail component
const MessageDetail = () => (
  <article className="flex flex-col mt-4 text-white max-md:max-w-full">
    <div className="shrink-0 h-px border border-solid border-zinc-800 max-md:max-w-full" />
    <header className="flex gap-5 justify-between mx-8 mt-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-2">
        <div className="shrink-0 w-10 h-10 rounded-full bg-zinc-300" />
        <div className="flex flex-col my-auto">
          <h2 className="text-sm font-bold">Marquess Brownie</h2>
          <p className="text-xs font-light">marquess69@gmail.com</p>
        </div>
      </div>
      <div className="flex gap-3.5 my-auto text-sm font-light">
        <time>July 30, 12:45 PM</time>
        <button><FiRewind className="w-6 h-6" /></button>
        <button><FiShare2 className="w-6 h-6" /></button>
        <button><FiTrash2 className="w-6 h-6" /></button>
      </div>
    </header>
    <div className="shrink-0 mt-6 h-px border border-solid border-zinc-800 max-md:max-w-full" />
    <div className="flex flex-col px-9 mt-14 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-xl font-semibold max-md:max-w-full">Resignation Letter</h1>
      <p className="mt-8 text-base text-stone-300 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Velit auctor neque eget laoreet sed et eget.
      </p>
      <p className="mt-6 text-base text-stone-300 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Velit auctor neque eget laoreet sed et eget.
      </p>
    </div>
    <button className="flex justify-center items-center self-end p-5 mt-96 rounded-[1000px] w-[78px] max-md:mt-10">
      <FiPlus className="w-full h-full text-white" />
    </button>
  </article>
);

// ActionBar component
const ActionBar = () => (
  <nav className="flex gap-5 justify-between items-start self-start ml-8 max-md:ml-2.5">
    {[FiRewind, FiShare2, FiTrash2, FiPaperclip].map((Icon, index) => (
      <React.Fragment key={index}>
        <button>
          <Icon className="shrink-0 w-6 h-6 text-white" />
        </button>
        {index < 3 && (
          <div className="shrink-0 self-stretch w-px border border-solid border-zinc-800 h-[26px]" />
        )}
      </React.Fragment>
    ))}
    <button className="flex flex-col self-stretch my-auto">
      <span className="shrink-0 w-1 h-1 rounded-2xl bg-neutral-400" />
      <span className="shrink-0 w-1 h-1 rounded-2xl bg-neutral-400" />
      <span className="shrink-0 w-1 h-1 rounded-2xl bg-neutral-400" />
    </button>
  </nav>
);

// MessagePreview component
const MessagePreview = ({ sender, time, subject, preview, attachment, highlighted }) => (
  <article className={`flex flex-col px-8 py-2.5 mt-6 w-full ${highlighted ? 'bg-white bg-opacity-10' : ''} max-md:px-5`}>
    <div className="flex gap-5 justify-between">
      <h2 className="text-base font-bold">{sender}</h2>
      <time className="text-xs font-light">{time}</time>
    </div>
    <h3 className="mt-1 text-sm">{subject}</h3>
    <p className="mt-1 text-sm font-light text-neutral-400">{preview}</p>
    {attachment && (
      <div className="flex gap-2 p-1 mt-1.5 text-sm font-light whitespace-nowrap rounded-md border border-solid border-neutral-500">
        <FiPaperclip className="shrink-0 w-6 h-6" />
        <span>{attachment.name}</span>
      </div>
    )}
  </article>
);

// MessageList component
const MessageList = () => {
  const messages = [
    {
      sender: "Marquess Brownie",
      time: "12:45 PM",
      subject: "Resignation letter",
      preview: "Lorem ipsum dolor sit amet consectetur.",
      attachment: { name: "image.png" },
      highlighted: true
    },
    {
      sender: "Marquess Brownie",
      time: "12:45 PM",
      subject: "Resignation letter",
      preview: "Lorem ipsum dolor sit amet consectetur.",
    }
  ];

  return (
    <section>
      {messages.map((message, index) => (
        <MessagePreview key={index} {...message} />
      ))}
      <div className="mt-3 w-full border border-solid border-stone-900" />
    </section>
  );
};

// FilterTabs component
const FilterTabs = () => (
  <nav className="flex gap-5 justify-between self-center mt-7 max-w-full text-sm text-center whitespace-nowrap w-[215px]">
    {['All', 'Read', 'Unread'].map((tab, index) => (
      <button key={index} className={index === 0 ? 'font-semibold' : ''}>
        {tab}
      </button>
    ))}
  </nav>
);

// SearchBar component
const SearchBar = () => (
  <div className="flex gap-1.5 px-2.5 py-2 mt-8 text-sm rounded-xl bg-zinc-300 bg-opacity-30 text-stone-300">
    <FiSearch className="shrink-0 w-6 h-6" />
    <label htmlFor="searchInput" className="sr-only">Search by people, messages</label>
    <input
      id="searchInput"
      type="text"
      placeholder="Search by people, messages"
      className="my-auto bg-transparent border-none focus:outline-none"
    />
  </div>
);

// InboxPage component
export const Inbox = () => (
  <div className="flex items-start gap-x-8 bg-gray-950 max-md:flex-wrap max-md:pl-5">
    <SideBar/>
    <div className='flex'>
    <aside className="flex flex-col mt-12 text-white max-md:mt-10">
      <div className="flex flex-col px-8 max-md:px-5">
        <h1 className="text-3xl font-bold">Inbox</h1>
        <SearchBar />
        <FilterTabs />
        <div className="mt-5 border-2 border-cyan-400 border-solid aspect-[50] w-[86px]" />
      </div>
      <MessageList />
    </aside>
    <div className="shrink-0 self-stretch w-px border border-solid border-zinc-800 h-[1024px]" />
    <main className="flex flex-col mt-10 max-md:max-w-full">
      <ActionBar />
      <MessageDetail />
    </main>
    </div>
  </div>
);
