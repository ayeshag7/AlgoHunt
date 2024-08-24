import logo from "../assets/logoAH.png";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
      <Link to="/">
      <img loading="lazy" src={logo} alt="algoHunt Logo" className="shrink-0 w-44 max-w-full aspect-[2.7] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10" />
      </Link>
    </div>
  )
}
