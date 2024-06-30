import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import splitText from "../../utils/splitText";
import TextAnimate from "../TextAnimate";
import { motion } from "framer-motion";
import featureds from "../../constants/featured";
import useCursor from "../../hooks/useCursor";
import CursorAnimate from "../CursorAnimate";
import { Link } from "react-router-dom";

const Page = () => {
  const parentRef = useRef(null);
  const [enter, setEnter] = useState(false);
  const { hideCursor, defaultCursor } = useCursor();

  useEffect(() => {
    const initAnimation = () => {
      gsap.registerPlugin(ScrollTrigger);
      const section = parentRef.current;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "-15% 50%",
          end: "50% 50%",
          scrub: 2,
        },
      });
      tl.to(section, {
        translateY: "-20%",
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

  const characters = splitText("Featured");

  return (
    <>
      <section
        className="w-full h-full min-h-screen flex flex-col items-center relative bg-green md:rounded-t-2xl px-[4vw]"
        ref={parentRef}
        id="featured"
      >
        <div className="w-full flex justify-center items-center border-b border-dark-1/20 py-4">
          <motion.span
            initial={{ fontSize: "0px", y: "70%" }}
            whileInView={{ fontSize: "3.5vw", y: 0 }}
            transition={{ ease: "easeInOut", duration: "0.4" }}
            className="mr-4 text-dark-1/90 leading-[4.2vw] overflow-hidden inline-block my-[2.8vw]"
          >
            •
          </motion.span>
          {characters.map((character, idx) => {
            return (
              <TextAnimate
                key={idx}
                value={character}
                className="font-black uppercase text-[1.8rem] leading-[1.8rem] md:text-[3.5vw] text-dark-1/90 md:leading-[4.2vw] font-apercuRegular my-[2.4vw] "
                every
                delay={0.035 * idx}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-full gap-10 my-[6vh] overflow-hidden">
          {featureds.map(({ src, text, to }, mainIdx) => {
            const words = text.split(" ");
            return (
              <Link to={to} target="_blank" key={mainIdx}>
                <motion.div
                  variants={{ initial: { opacity: 0 } }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: "1",
                    delay: 0.15 * mainIdx,
                  }}
                  className="w-full h-full relative rounded-xl overflow-hidden"
                  viewport={{ once: true }}
                  onMouseEnter={() => {
                    hideCursor();
                    setEnter(true);
                  }}
                  onMouseLeave={() => {
                    defaultCursor();
                    setEnter(false);
                  }}
                  initial="initial"
                  whileHover="onHover"
                >
                  <motion.img
                    variants={{
                      initial: { scale: 1 },
                      onHover: { scale: 1.35 },
                    }}
                    transition={{
                      duration: 1.6,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    src={`/featured/${src}`}
                    alt={text}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[10]">
                    {words.map((word, idx) => {
                      return (
                        <TextAnimate
                          key={idx}
                          value={word}
                          className="text-[1.8rem] md:text-[4.5vw] font-black font-foundersGrotesk text-light-3 leading-[1.8rem] md:leading-[4.65vw]"
                          delay={idx === 0 ? ".1" * mainIdx : ".25" * mainIdx}
                        />
                      );
                    })}
                  </div>
                  <div className="bg-black absolute w-full h-full top-0 left-0 opacity-75"></div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>
      <CursorAnimate
        cursorLabelClassName="size-[60px] text-green"
        cursorClassName="size-[60px] bg-dark-1"
        animate={enter ? "enter" : "closed"}
      >
        Shop
      </CursorAnimate>
    </>
  );
};

export default Page;
