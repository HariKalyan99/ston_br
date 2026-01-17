import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { GiChefToque } from "react-icons/gi";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5",
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 100,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5",
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to(".hero-container", {
      rotate: -5,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <video
          src="src/assets/videos/resto-bg1.mp4"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          loop
        />
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title bg-white/10">Hidden Grove</h1>
          </div>
          <div
            style={{ clipPath: "polygon(100% 0, 100% 0, 0 100%, 0 100%)" }}
            className="hero-text-scroll"
          >
            <h1 className="flex justify-center items-center">
              C<GiChefToque />
              ntinental Dining
            </h1>
          </div>

          <h2>
            Stony brook, A secluded garden restaurant serving elegant
            Continental cuisine and fine drinks. A calm, beautiful space to
            dine, relax, and celebra it.
          </h2>

          <div className="hero-button">
            <p>Reserve?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
