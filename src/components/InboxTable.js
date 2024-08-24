import React from 'react';
import { FiPaperclip, FiTrash2 } from 'react-icons/fi';

export const InboxTable = () => {
  const inboxItems = [
    { date: "July 3, 2024", from: "example@gmail.com", subject: "Project Proposal", attachment: "image.png" },
    { date: "July 3, 2024", from: "example@gmail.com", subject: "Project Proposal", attachment: "image.png" },
    { date: "July 3, 2024", from: "example@gmail.com", subject: "Project Proposal", attachment: "image.png" },
    { date: "July 3, 2024", from: "example@gmail.com", subject: "Project Proposal", attachment: null }
  ];

  return (
    <section className="flex flex-col items-center max-md:hidden self-center pt-8 pb-16 mt-6 bg-indigo-100 bg-opacity-10 max-w-[996px] min-w-[666px] rounded-[32px] max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full text-base font-medium text-white whitespace-nowrap max-w-[800px] max-md:flex-wrap max-md:max-w-full">
        <div>Date</div>
        <div>From</div>
        <div>Subject</div>
        <div>Attachment</div>
        <div>Action</div>
      </div>
      <div className="self-stretch mt-5 w-full border border-solid border-zinc-800 max-md:max-w-full" />
      <div className="flex gap-5 justify-between items-start mt-5 w-full max-w-[800px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        {["date", "from", "subject"].map((column) => (
          <div key={column} className="flex flex-col mt-2 text-base font-light text-white">
            {inboxItems.map((item, index) => (
              <div key={index} className={index > 0 ? "mt-8" : ""}>
                {item[column]}
              </div>
            ))}
          </div>
        ))}
        <div className="flex flex-col text-sm font-light text-white">
          {inboxItems.map((item, index) => (
            <div key={index} className={index > 0 ? "mt-5" : ""}>
              {item.attachment ? (
                <div className="flex gap-2 p-1 whitespace-nowrap rounded-md border border-solid border-neutral-500">
                  <FiPaperclip className="shrink-0 self-start w-[18px] text-blue-500" />
                  <div>{item.attachment}</div>
                </div>
              ) : (
                <div className="mt-7 text-base">No Attachment</div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center self-stretch">
          {inboxItems.map((_, index) => (
            <FiTrash2 key={index} className={`w-6 h-6 text-red-500 ${index > 0 ? "mt-7" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
