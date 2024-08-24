import React from 'react';
import { FiSearch } from 'react-icons/fi';

export const SearchBar = () => {
  return (
    <div className="flex gap-1.5 px-2.5 py-2 text-sm rounded-xl bg-zinc-300 bg-opacity-30 text-stone-300">
      <FiSearch className="shrink-0 w-6 h-6 text-stone-300" />
      <label htmlFor="search" className="sr-only">Search</label>
      <input
        id="search"
        type="text"
        placeholder="Search by people, template, messages"
        className="my-auto bg-transparent border-none focus:outline-none"
      />
    </div>
  );
}
