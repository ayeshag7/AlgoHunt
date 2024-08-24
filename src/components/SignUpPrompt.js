import {Link} from "react-router-dom";

export const SignUpPrompt = () => {
  return (
    <div className="flex gap-0.5 self-center mt-6 tracking-normal">
      <span className="text-neutral-400 mr-2">New Member?</span>
      <Link to="/signup">
      <button className="font-medium text-cyan-400 underline">Sign Up</button>
      </Link>
    </div>
  )
};