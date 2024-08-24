import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

// Unified Component
export const FAQ = () => {
  // Initial data for FAQs
  const initialFaqData = [
    {
      question: "How does this work?",
      answer: "This platform provides a simple and intuitive interface for setting up and managing your custom email accounts. Whether you're an individual or a business, our step-by-step process ensures that you can get your professional email up and running quickly and easily.",
      isOpen: true
    },
    {
      question: "Is this service secure?",
      answer: "Yes, security is our top priority. We use industry-standard encryption protocols to protect your data. Our servers are regularly updated and maintained to ensure they are secure from potential threats.",
      isOpen: false
    },
    {
      question: "Can I use my own domain?",
      answer: "Absolutely! You can use your own domain to create custom email addresses. Our system supports a wide range of domain registrars, making it easy to integrate your domain with our email services.",
      isOpen: false
    },
    {
      question: "What support options are available?",
      answer: "We offer 24/7 support through email and chat. Our support team is always ready to assist you with any issues or questions you may have. Additionally, our comprehensive knowledge base provides detailed guides and FAQs.",
      isOpen: false
    }
  ];

  // State to manage FAQ data including open/close state
  const [faqData, setFaqData] = useState(initialFaqData);

  // Function to toggle the open state of an FAQ item
  const toggleFaq = (index) => {
    setFaqData((prevFaqData) =>
      prevFaqData.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  // Individual FAQ item component
  const FAQItem = ({ question, answer, isOpen, index }) => (
    <>
      <div
        className="flex gap-5 justify-between px-px cursor-pointer max-md:flex-wrap max-md:max-w-full"
        onClick={() => toggleFaq(index)}
      >
        <div className="text-cyan-400 text-lg">{question}</div>
        {isOpen ? (
          <FiMinus className="shrink-0 my-auto text-cyan-400" />
        ) : (
          <FiPlus className="shrink-0 my-auto text-cyan-400" />
        )}
      </div>
      {isOpen && (
        <div className="mt-2.5 text-base text-slate-400 max-md:max-w-full">
          {answer}
        </div>
      )}
      <div className="shrink-0 mt-5 h-0.5 rounded bg-sky-400 bg-opacity-30 max-md:max-w-full" />
    </>
  );

  return (
    <section className="flex justify-center items-center px-16 py-20 bg-transparent max-md:px-5">
      <div className="mt-20 mb-16 w-full max-w-[1137px] max-md:mt-4 max-md:mb-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-base max-md:mt-10 max-md:max-w-full">
              <h2 className="max-md:text-3xl text-5xl text-cyan-400 font-bold max-md:max-w-full">
                Any questions?
              </h2>
              <p className="mt-8 text-slate-400 max-md:max-w-full">
                Whether you're curious about our services, or need help with an issue, we're here to answer your questions. Check out our frequently asked questions below or reach out to our support team.
              </p>
              <a href="#" className="flex gap-2.5 self-start mt-8 font-medium text-sky-400">
                <span>More FAQs</span>
                <FiPlus className="shrink-0 w-6 aspect-square" />
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-lg font-medium max-md:mt-10 max-md:max-w-full">
              {faqData.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={item.isOpen}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
