import { Link } from "react-router-dom"

export const SignInPrompt = () => {
  return (
    <div className="flex gap-0.5 self-center mt-6 tracking-normal">
      <span className="text-neutral-400 mr-2">Already Have an Account?</span>
      <Link to="/login">
      <button className="font-medium text-cyan-400 underline">Sign In</button>
      </Link>
    </div>
  )
}
