import { Hero } from "./Hero";
import { Offer } from "./Offer";
import { HowItWorks } from "./HowItWorks";
import { PricingPlans } from "./PricingPlans";
import { Testimonials } from "./Testimonials";
import {FAQ} from "./FAQ";

import {Header, Footer} from "../../components";

import backgroundImage from "../../assets/home-background.png";

export const Home = () => {
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
    <div className="bg-black bg-opacity-50">
      <Header />
      <Hero />
      <Offer />
      <HowItWorks />
      <PricingPlans />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
    </main>

  )
}
