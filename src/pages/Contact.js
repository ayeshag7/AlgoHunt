import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; // Importing icons
import { Header, Footer } from "../components";
import backgroundImage from "../assets/home-background.png";

export const Contact = () => {
  // Data for contact methods
  const contactMethods = [
    {
      icon: <FiMail className="text-cyan-400 w-10 h-10" />,
      title: "Email Us",
      content: "contact@algohunt.com"
    },
    {
      icon: <FiPhone className="text-cyan-400 w-10 h-10" />,
      title: "Contact Customer Support",
      content: "+0010010013265"
    },
    {
      icon: <FiMapPin className="text-cyan-400 w-10 h-10" />,
      title: "Visit Us",
      content: "Street 12, Madagascar Island, Chicago 570000"
    }
  ];

  // Individual contact method component
  const ContactMethod = ({ icon, title, content }) => (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-center px-5 pt-10 pb-20 w-full bg-indigo-100 bg-opacity-10 rounded-[32px] max-md:mt-8">
        <div>{icon}</div>
        <h3 className="mt-8 text-lg font-bold text-white">{title}</h3>
        <p className="self-stretch mt-11 text-2xl text-center text-cyan-400 max-md:mt-10">{content}</p>
      </div>
    </div>
  );

  // Contact form component
  const ContactForm = () => (
    <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
      <form className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-wrap">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm font-bold tracking-normal text-stone-300">First Name</label>
            <input
              id="firstName"
              type="text"
              className="p-3.5 mt-2 text-base tracking-normal rounded-xl bg-indigo-100 bg-opacity-10 border border-solid border-gray-400 text-neutral-500 max-md:pr-5"
              placeholder="Enter here"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm font-bold tracking-normal text-stone-300">Last Name</label>
            <input
              id="lastName"
              type="text"
              className="p-3.5 mt-2 text-base tracking-normal rounded-xl bg-indigo-100 bg-opacity-10 border border-solid border-gray-400 text-neutral-500 max-md:pr-5"
              placeholder="Enter here"
            />
          </div>
        </div>
        <label htmlFor="email" className="mt-4 text-sm font-bold tracking-normal text-stone-300 max-md:max-w-full">Email</label>
        <input
          id="email"
          type="email"
          className="p-3.5 mt-2 text-base tracking-normal rounded-xl bg-indigo-100 bg-opacity-10 border border-solid border-gray-400 text-neutral-500 max-md:pr-5 max-md:max-w-full"
          placeholder="Enter here"
        />
        <label htmlFor="subject" className="mt-4 text-sm font-bold tracking-normal text-stone-300 max-md:max-w-full">Subject</label>
        <input
          id="subject"
          type="text"
          className="p-3.5 mt-2 text-base tracking-normal rounded-xl bg-indigo-100 bg-opacity-10 border border-solid border-gray-400 text-neutral-500 max-md:pr-5 max-md:max-w-full"
          placeholder="Enter here"
        />
        <label htmlFor="message" className="mt-4 text-sm font-bold tracking-normal text-stone-300 max-md:max-w-full">Message</label>
        <textarea
          id="message"
          className="px-3.5 pt-3.5 pb-8 mt-2 bg-indigo-100 bg-opacity-10 text-base tracking-normal rounded-xl border border-solid border-gray-400 text-neutral-500 max-md:pr-5 max-md:max-w-full"
          placeholder="Write here"
        ></textarea>
        <button type="submit" className="px-8 py-4 mt-6 text-lg font-bold text-white whitespace-nowrap rounded-xl max-md:px-5 max-md:max-w-full bg-cyan-400">
          Send
        </button>
      </form>
    </div>
  );

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#111827',
      }}
    >
      <Header />

      <section className="flex flex-col items-center pt-12 pb-20 px-24 bg-transparent max-md:px-5">
        <div className="mt-24 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <h1 className="text-3xl font-bold text-white max-md:max-w-full">Contact Us</h1>
                <p className="mt-2.5 text-base font-medium text-slate-400 pr-44 max-md:max-w-full">
                  If you have any questions or need further information, please feel free to reach out to us. Our team is here to assist you.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
        <h2 className="mt-28 text-4xl font-bold text-white max-md:mt-10">Or Contact us via</h2>
        <div className="mt-14 mb-12 max-w-full w-[918px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            {contactMethods.map((method, index) => (
              <ContactMethod key={index} {...method} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
