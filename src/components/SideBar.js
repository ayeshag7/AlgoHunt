import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FiHome, FiInbox, FiSend, FiFileText, FiEdit, FiSettings } from 'react-icons/fi';

// Define paths for navigation items
const paths = {
  Home: '/dashboard-home',
  Inbox: '/inbox',
  Sent: '/sent',
  Drafts: '/drafts',
  Templates: '/templates',
  Settings: '/settings',
  Profile: '/profile-page'
};

export const SideBar = () => {
  const sidebarItems = [
    { icon: <FiHome />, label: 'Home', path: paths.Home },
    { icon: <FiInbox />, label: 'Inbox', path: paths.Inbox },
    { icon: <FiSend />, label: 'Sent', path: paths.Sent },
    { icon: <FiFileText />, label: 'Drafts', path: paths.Drafts },
    { icon: <FiEdit />, label: 'Templates', path: paths.Templates }
  ];

  return (
    <nav className="flex max-md:hidden flex-col px-6 py-10 min-h-screen whitespace-nowrap rounded-none bg-cyan-400 bg-opacity-10 max-w-[260px]">
      <div className='flex items-center gap-x-3'>
        <Link to="/">
        <img
          loading="lazy"
          src={logo}
          alt="Logo"
          className="max-w-full aspect-[2.78] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-16 h-16"
        />
        </Link>
        <p className='text-xl font-bold text-gray-400'>algoHunt</p>
      </div>
      <ul className="mt-8 mb-16 space-y-1">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex items-center py-2.5 px-4 w-full text-lg font-semibold text-white rounded-none ${
                item.isActive ? 'bg-cyan-400 bg-opacity-70 rounded-xl' : ''
              }`}
            >
              <div className="flex gap-3">
                <span className="shrink-0 self-start aspect-square w-[26px]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 p-2 mt-auto">
        <div>
          <Link
            to={paths.Settings}
            className="flex items-center py-2.5 px-4 w-full text-lg font-semibold text-white rounded-none"
          >
            <div className="flex gap-3">
              <span className="shrink-0 self-start aspect-square w-[26px]">
                <FiSettings />
              </span>
              <span>Settings</span>
            </div>
          </Link>
        </div>
        
        <div className='flex gap-3 p-2 mt-auto'>
          <div
            className="shrink-0 my-auto rounded-full bg-zinc-300 h-[30px] w-[30px]"
            aria-hidden="true"
          />
          <div className="flex flex-col">
            <div className="text-base font-medium text-white">
              <Link to={paths.Profile}>Username</Link>
            </div>
            <div className="text-sm text-neutral-500">username@gmail.com</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
