import React from 'react';
import {SideBar} from "../../components";
import { FiSearch, FiEdit } from 'react-icons/fi';

// Unified Settings Component
export const Settings = () => {
  // Data for account settings
  const accountSettings = [
    {
      title: 'Email',
      description: 'Once changed, you cannot change it for 60 days.',
      value: 'username@gmail.com'
    },
    {
      title: 'Password',
      description: 'Once changed, you cannot change it for 60 days.',
      value: '********'
    }
  ];

  // Data for subscription settings
  const subscriptionSettings = [
    {
      title: 'Current Subscription',
      description: 'Monthly Subscription $3 (Auto renews on Aug 1, 2024)',
      action: 'Cancel Subscription'
    },
    {
      title: 'Activation Code',
      description: 'If used now, will apply new month',
      value: '********'
    }
  ];

  // Data for white label settings
  const whiteLabelSettings = [
    {
      title: 'Platform Name',
      description: 'Once changed, you cannot change it for 60 days.',
      value: 'Business_name'
    }
  ];

  // Search bar component
  const SearchBar = () => (
    <div className="flex gap-1.5 px-2.5 py-2 text-sm rounded-xl bg-zinc-300 bg-opacity-30 text-stone-300">
      <FiSearch className="shrink-0 w-6 h-6" />
      <div className="my-auto">Search Setting</div>
    </div>
  );

  // Settings section component
  const SettingsSection = ({ title, settings }) => (
    <section className="w-full max-w-[1116px] max-md:max-w-full">
      <h2 className="self-end mt-8 text-2xl font-bold text-white">{title}</h2>
      {settings.map((setting, index) => (
        <div key={index} className="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap">
          <div className="flex flex-col my-auto font-light">
            <div className="text-xl text-white">{setting.title}</div>
            <div className="text-sm text-zinc-500">{setting.description}</div>
          </div>
          {setting.value ? (
            <div className="px-6 py-4 text-base tracking-normal leading-6 whitespace-nowrap rounded-xl border border-solid border-slate-400 text-zinc-500 max-md:px-5">
              {setting.value}
            </div>
          ) : (
            <button className="self-start px-5 py-3.5 text-sm font-semibold tracking-normal text-center text-gray-200 bg-red-800 rounded-xl">
              {setting.action}
            </button>
          )}
        </div>
      ))}
    </section>
  );

  // Business logo component
  const BusinessLogo = () => (
    <div className="flex gap-5 justify-between mt-5 w-full max-w-[1116px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col my-auto font-light">
        <div className="text-xl text-white">Business Logo</div>
        <div className="text-sm text-zinc-500">Lorem ipsum dolor sit amet</div>
      </div>
      <div className="flex gap-2.5 text-xl font-medium text-blue-700">
        <div className="my-auto">Edit Logo</div>
        <FiEdit className="shrink-0 p-4 rounded-xl aspect-square w-[60px]" />
      </div>
    </div>
  );

  // Color scheme component
  const ColorScheme = () => (
    <div className="flex gap-5 justify-between mt-5 w-full max-w-[1116px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col font-light">
        <div className="text-xl text-white">Color Scheme</div>
        <div className="text-sm text-zinc-500">Lorem ipsum dolor sit amet</div>
      </div>
      <div className="flex gap-2.5 my-auto">
        <div className="shrink-0 px-6 py-4 h-11 rounded-xl w-[50px] bg-red-500" />
        <div className="shrink-0 px-6 py-4 h-11 rounded-xl w-[50px] bg-blue-500" />
        <div className="shrink-0 px-6 py-4 h-11 rounded-xl w-[50px] bg-green-500" />
        <div className="flex justify-center items-center px-5 py-3 bg-white rounded-xl border border-blue-900 border-solid">
          <FiEdit className="shrink-0 w-[30px] h-[30px]" />
        </div>
        <div className="shrink-0 px-6 py-4 h-11 rounded-xl w-[50px] bg-yellow-500" />
      </div>
    </div>
  );

  return (
    <main className="flex gap-x-6 bg-gray-950 max-md:px-5">
      <SideBar/>
      <div className='py-12 w-full px-12'>
        <header className="flex gap-5 items-start w-full max-w-[1116px] max-md:flex-wrap max-md:max-w-full">
          <h1 className="flex-auto mt-2.5 text-3xl font-bold text-white">Settings</h1>
          <SearchBar />
        </header>

        <SettingsSection title="Account" settings={accountSettings} />
        <SettingsSection title="Subscription" settings={subscriptionSettings} />
        <SettingsSection title="White Label" settings={whiteLabelSettings} />

        <ColorScheme />
        <BusinessLogo />
      </div>
    </main>
  );
};