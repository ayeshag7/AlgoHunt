import React from 'react';

export const UserGreeting = () => {
  return (
    <section className="flex gap-3 self-start mt-16 ml-2 mb-16 text-white max-md:mt-10 max-md:ml-2.5">
      <div className="shrink-0 bg-white h-[60px] rounded-[800px] w-[60px]" aria-hidden="true" />
      <div className="flex flex-col my-auto">
        <p className="text-base font-light">Good Evening,</p>
        <h2 className="mt-1 text-2xl font-bold">User_Name</h2>
      </div>
    </section>
  );
}
