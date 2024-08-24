import React from 'react';

// Unified Component
export const Testimonials = () => {
  // Data for testimonials
  const testimonials = [
    { name: 'John Doe', role: 'Linkedin Member' },
    { name: 'Jane Smith', role: 'Marketing Specialist' },
    { name: 'Alice Johnson', role: 'Software Engineer' },
    { name: 'Bob Brown', role: 'Product Manager' },
    { name: 'Emily Davis', role: 'UI/UX Designer' }
  ];

  // Individual testimonial item component
  const TestimonialItem = ({ name, role, isActive }) => (
    <div className="flex flex-col flex-1 self-stretch">
      <h4 className="self-center text-xl font-bold text-white">{name}</h4>
      <p className={`mt-${isActive ? '1.5' : '3'} text-base text-slate-400`}>{role}</p>
      {isActive && <div className="shrink-0 mt-2.5 h-1 bg-cyan-400 rounded-3xl" />}
    </div>
  );

  // Individual testimonial card component
  const TestimonialCard = () => (
    <article className="flex flex-col items-center px-20 py-14 mt-11 max-w-full bg-indigo-100 bg-opacity-10 rounded-[32px] w-[890px] max-md:px-5 max-md:mt-10">
      <p className="text-lg text-center text-slate-400 max-md:max-w-full">
        "This platform has been a game-changer for our business. The automation features save us so much time, and the integration with our existing systems was seamless. We highly recommend it to any company looking to streamline their email management."
      </p>
      <h3 className="mt-14 text-xl font-bold text-white max-md:mt-10">John Doe</h3>
      <p className="mt-1.5 text-base text-cyan-400">Linkedin Member</p>
    </article>
  );

  return (
    <section className="flex flex-col items-center p-20 bg-transparent max-md:px-5">
      <h2 className="mt-24 text-white max-md:text-3xl text-4xl font-bold text-center max-md:mt-4 max-md:max-w-full">
        Testimonials
      </h2>
      <p className="mt-3 max-md:text-xl text-2xl text-center text-white text-opacity-60 max-md:max-w-full">
        They Believe In Us, And We Are Proud Of That ...
      </p>
      <TestimonialCard />
      <div className="flex gap-5 items-start mt-11 max-md:flex-wrap max-md:mt-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            isActive={index === 0}
          />
        ))}
      </div>
    </section>
  );
};
