import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

export const SocialLogin = () => {
  const socialOptions = [
    { name: 'Google', icon: <FaGoogle color="#DB4437" size={24} /> },
    { name: 'Facebook', icon: <FaFacebookF color="#3b5998" size={24} /> },
    { name: 'Apple', icon: <FaApple color="#000000" size={30} /> },
  ];

  return (
    <>
      {socialOptions.map((option) => (
        <button
          key={option.name}
          className="flex justify-center items-center px-3 py-3.5 mt-4 text-base tracking-normal text-white rounded-xl border border-solid border-slate-400 max-md:px-5 max-md:max-w-full w-full"
        >
          <div className="flex gap-3">
            <span className="shrink-0 w-6 aspect-square">{option.icon}</span>
            <span className="my-auto">Continue with {option.name}</span>
          </div>
        </button>
      ))}
    </>
  );
}
