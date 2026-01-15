import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import MessageSection from "./sections/MessageSection";
import AmenitiesSection from "./sections/AmenitiesSection";
import BarDelightSection from "./sections/BarDelightSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <AmenitiesSection />
          <BarDelightSection />
        </div>
        {/* <div className="flex h-[400vh] border">
          <h1 className="">Hello</h1>
        </div> */}
      </div>
    </main>
  );
};

export default App;
