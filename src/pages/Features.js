import {Offer, HowItWorks, Testimonials, FAQ} from "./Home";
import { Header, Footer } from "../components";

import backgroundImage from "../assets/home-background.png";

export const Features = () => {
  return (
    <main className="min-h-screen"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#111827',
    }}>

    <Header/>

    <div className="flex flex-col items-center px-4 py-8 mt-20">
    <h1 className="max-md:text-4xl text-5xl font-bold text-center text-white max-md:max-w-full">
          Features
        </h1>
    <p className="mt-6 max-md:text-lg text-xl text-center text-slate-400 w-[666px] max-md:max-w-full">
    Unleash the full potential of our platform with a suite of powerful tools and innovative features designed to elevate your experience.
    </p>
    </div>

    <Offer/>
    <HowItWorks/>
    <Testimonials/>
    <FAQ/>

    <Footer/>
    
    </main>
  )
}
