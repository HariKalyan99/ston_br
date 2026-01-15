import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { amenitieslists } from "../constants";

const AmenitiesSlider = () => {
  const sliderRef = useRef();
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1600}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1600}px`,
        ease: "power1.inOut",
      });

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "power1.inOut",
        })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -22,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );
    }
  });
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {amenitieslists.map((flavor, ind) => {
          return (
            <div
              key={flavor.name}
              className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
            >
              {/* Image */}
              <img
                src={`src/assets/images/${ind + 1}.png`}
                alt={flavor.name}
                className="drinks"
              />

              {/* Gradient Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-t-2xl rounded-bl-2xl" />

              {/* Title */}
              <h1 className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                {flavor.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AmenitiesSlider;
