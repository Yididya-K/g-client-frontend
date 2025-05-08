
import Navbar from "../components/user/navbar";
import Footer from "@/src/components/user/footer";

import HomeHero from "../components/user/homeHero";
import OurSolutions from "../components/user/ourSolutions";
import NextStepSection from "../components/user/nextStepSection";
import WeAreProudSection from "../components/user/weAreProudSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <OurSolutions />
      <NextStepSection />
      <WeAreProudSection />
      <Footer />
    </div>
  );
}
