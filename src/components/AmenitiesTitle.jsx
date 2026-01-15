import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const AmenitiesTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split", {
      type: "chars",
    });

    const secondTextSplit = SplitText.create(".second-text-split", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });
  });
  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>

      <div
        className="flavor-text-scroll"
        style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
      >
        <div className="bg-white/10 pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-white">Signature</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>Experiences setup</h1>
      </div>
    </div>
  );
};

export default AmenitiesTitle;
