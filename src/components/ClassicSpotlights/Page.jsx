import React, { useEffect, useRef } from "react";
import ScrollText from "../ScrollText";
import classics from "../../constants/classics";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextAnimate from "../TextAnimate";
import Send from "../../icons/Send";
import { motion } from "framer-motion";
import useCursor from "../../hooks/useCursor";
import { Link } from "react-router-dom";

const Page = () => {
  const parentRef = useRef(null);
  const { hideCursor, defaultCursor } = useCursor();

  useEffect(() => {
    const initAnimation = () => {
      gsap.registerPlugin(ScrollTrigger);
      const section = parentRef.current;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "-20% 50%",
          end: "55% 50%",
          scrub: 1,
        },
      });
      tl.to(section, {
        translateY: "-15%",
      });
    };

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      initAnimation();
    }

    const handleResize = () => {
      if (mediaQuery.matches) {
        initAnimation();
      } else {
        ScrollTrigger.kill();
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);
  return (
    <section
      className="h-full w-full flex flex-col items-center gap-y-4 bg-dark-1 md:rounded-t-2xl py-8 md:py-2 mb-8 md:mb-0"
      ref={parentRef}
      id="spotlights"
    >
      <div className="w-full rounded-t-2xl flex flex-col items-center mt-[0.5vw] mb-[2.5vw] px-[4vw]">
        <div className="flex justify-center py-[2.5vw] border-b border-light-1 w-full">
          <TextAnimate
            value="Classics"
            className="font-black uppercase text-[1.9rem] md:text-[8vw] text-green leading-[1.5rem] md:leading-[9vw] font-foundersGrotesk"
            marginRight="1.5vw"
            every
          />
          <TextAnimate
            value="Spotlights"
            className="font-black uppercase text-[1.9rem] md:text-[8vw] text-green leading-[1.5rem] md:leading-[9vw] font-foundersGrotesk"
            marginRight="1.5vw"
            delay="0.09"
            every
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-[2vw] mb-[6vw] gap-y-6">
        {classics.map((classic, idx) => {
          return (
            <Link to={classic.to} target="_blank" key={idx}>
              <motion.div
                className="relative flex flex-col justify-center items-center"
                initial="initial"
                whileHover="onHover"
                onMouseEnter={hideCursor}
                onMouseLeave={defaultCursor}
              >
                <ScrollText
                  value={classic.name}
                  sectionRef={parentRef}
                  start={`${classic.start} 50%`}
                  end={`${classic.end} 50%`}
                  className="text-[8vw] font-futura font-black uppercase leading-tight cursor-pointer text-light-1"
                  counter={`0${idx + 1}`}
                  counterClassName="text-[2vw] font-futuraBookOblique font-bold text-light-1 opacity-30 left-[-2vw] top-[1vw]"
                />
                <span className="absolute right-0 top-0 translate-x-[100%]">
                  <Send
                    className="inline-block size-[16px] ml-1"
                    pathClassname="stroke-light-1"
                  />
                </span>
                <motion.span
                  className="w-full h-[0.5px] bg-light-1 absolute bottom-[10%] left-0"
                  variants={{
                    initial: { width: 0 },
                    onHover: { width: "100%" },
                  }}
                  transition={{ duration: "0.45", ease: "linear" }}
                ></motion.span>
                <div className="absolute">
                  <motion.img
                    variants={{
                      initial: { width: 0 },
                      onHover: { width: "230px" },
                    }}
                    transition={{ duration: "0.65", ease: "backInOut" }}
                    src={`/spotlights/${idx + 1}.png`}
                    alt={classic.name}
                    className="hidden lg:block object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
