import Button from "@/src/components/common/button";

import { FaPlus, FaCheck , FaArrowRight} from 'react-icons/fa';
import Navbar from '../components/user/navbar';
import Footer from "@/src/components/user/footer";
import LoginPage from "./auth/login/page";
import HomeHero from '../components/user/homeHero';
import OurSolutions from "../components/user/ourSolutions";
import NextStepSection from "../components/user/nextStepSection";
import WeAreProudSection from "../components/user/weAreProudSection";

export default function Home() {
 
  return (
    <div>
   
     
  
      <Navbar />
      <HomeHero /> 
      <OurSolutions />
      <NextStepSection/>
      <WeAreProudSection />
      <LoginPage />
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      
        <h1 className="text-4xl font-bold text-center sm:text-left">
          G-Client
        </h1>
        <p className="text-lg text-center sm:text-left">
          A simple and easy to use client for the G-Client API.
        </p>
        <div className="flex flex-col gap-4 items-center sm:items-start">
      

<Button leftIcon={<FaCheck />} rightIcon={<FaPlus />}>
  Proceed
</Button>
<Button variant="primary" rightIcon={<FaArrowRight />}> 
Create invoice
</Button>
        <Button variant="primary"> Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button disabled>Disabled Button</Button>
          <p className="text-lg text-center sm:text-left">
            G-Client is a simple and easy to use client for the G-Client API.
          </p>
        </div>
      </main>
     
    </div>
    <Footer/>
    </div>
  );
}
