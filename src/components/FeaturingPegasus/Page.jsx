import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { motion } from "framer-motion";
import TextAnimate from "../TextAnimate";
import CursorAnimate from "../CursorAnimate";
import Send from "../../icons/Send";
import Button from "../Button";
import useCursor from "../../hooks/useCursor";
import { Link } from "react-router-dom";

const Page = () => {
  const parentRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const [enter, setEnter] = useState(false);
  const { hideCursor, defaultCursor } = useCursor();

  useEffect(() => {
    const initAnimation = () => {
      gsap.registerPlugin(ScrollTrigger);
      const text = textRef.current;
      const section = sectionRef.current;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: "-10% 50%",
          end: "70% 50%",
          scrub: 2,
        },
      });
      tl.to(
        text,
        {
          translateY: "-35%",
        },
        "same"
      ).to(
        section,
        {
          translateY: "-25%",
        },
        "same"
      );
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

  const forWhom = [
    { name: "Men", to: "https://www.nike.com/in/men" },
    { name: "Women", to: "https://www.nike.com/in/women" },
    { name: "Kids", to: "https://www.nike.com/in/kids" },
    {
      name: "Gym Professionals",
      to: "https://www.nike.com/in/w/mens-training-gym-58jtoznik1",
    },
  ];

  return (
    <>
      <section
        className="w-full flex flex-col relative"
        ref={parentRef}
        id="pegasus"
      >
        <div className="w-full py-8 bg-dark-1 md:rounded-t-2xl" ref={textRef}>
          <div className="border-y border-light-3 flex overflow-hidden">
            <motion.h3
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: "24" }}
              className="text-[12vw] leading-tight uppercase text-light-1 whitespace-nowrap mr-3"
            >
              Energy • Innovation • Performance • Champion • Victory • Passion •
            </motion.h3>
            <motion.h3
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: "24" }}
              className="text-[12vw] leading-tight uppercase text-light-1 whitespace-nowrap"
            >
              Energy • Innovation • Performance • Champion • Victory • Passion •{" "}
            </motion.h3>
          </div>
        </div>
        <div
          className="h-full w-full bg-green md:rounded-t-2xl flex flex-col items-center px-[4vw] pb-[8vw] relative"
          ref={sectionRef}
        >
          <div className="flex mt-[2vw]">
            <TextAnimate
              value="Nike"
              className="font-black uppercase text-[8vw] text-dark-1 leading-[9vw] font-foundersGrotesk"
              marginRight="1.5vw"
              every
            />
            <TextAnimate
              value="Pegasus"
              className="font-black uppercase text-[8vw] text-dark-1 leading-[9vw] font-foundersGrotesk"
              marginRight="1.5vw"
              delay="0.05"
              every
            />
            <TextAnimate
              value="41"
              className="font-black uppercase text-[8vw] text-dark-1 leading-[9vw] font-foundersGrotesk"
              delay="0.2"
              every
            />
          </div>

          <div className="relative w-full my-[4vw] py-[2vw] border-y border-dark-1/20 flex flex-wrap justify-between font-apercuRegular text-dark-1/95 space-y-8 mt-4">
            <p className="w-full lg:w-[25%] text-dark-1 text-base">
              Elevate Your Run:
            </p>
            <p className="w-full sm:w-[35%] lg:w-[15%] text-sm text-pretty">
              Elevate your run with Nike's innovative design and cutting-edge
              technology. Our shoes are built to enhance your stride and boost
              performance.
            </p>
            <p className="w-full sm:w-[35%] lg:w-[15%] text-sm text-pretty">
              Join the global Nike running community, committed to quality and
              performance. Discover Pegasus 41 and unlock your potential on the
              track.
            </p>
            <div className="w-full lg:w-[20%]">
              <p className="text-dark-1/60 mb-4">For:</p>
              {forWhom.map((word, idx) => {
                return (
                  <Link to={word.to} key={idx} target="_blank">
                    <motion.p
                      initial="initial"
                      whileHover="onHover"
                      className="text-dark-1 text-sm ml-3 mb-1 cursor-pointer relative w-fit overflow-hidden"
                    >
                      {word.name}
                      <Send
                        className="inline-block size-[16px] ml-1"
                        pathClassname="stroke-dark-1"
                      />
                      <motion.span
                        variants={{
                          initial: { width: 0 },
                          onHover: { width: "100%" },
                        }}
                        transition={{ duration: 0.35 }}
                        className="h-[0.5px] bg-dark-1 absolute bottom-[10%] left-0"
                      ></motion.span>
                    </motion.p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between py-[2vw] gap-y-8">
            <div className="w-full md:w-[50%] flex flex-col justify-center items-center relative">
              <h3 className="text-[1.5rem] md:text-[4vw] font-apercuRegular absolute top-0 left-0">
                Try Now:
              </h3>
              <Button
                btnClassName="size-[150px] lg:size-[250px] border border-dark-1"
                className="text-dark-1 text-xl font-futuraCondensed"
                circleBgColor="#1f1f1f"
                to="https://www.nike.com/in/t/pegasus-41-road-running-shoes-SKDkNs"
              >
                Explore
              </Button>
            </div>

            <div className="w-[100%] md:w-[50%] flex justify-center items-center">
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.6, ease: [0.215, 0.61, 0.355, 1] }}
                onMouseEnter={() => {
                  hideCursor();
                  setEnter(true);
                }}
                onMouseLeave={() => {
                  defaultCursor();
                  setEnter(false);
                }}
                src="./pegasus.png"
                alt="nike pegasus 41"
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
          </div>
          <div className="bg-green w-full absolute bottom-0 left-0 translate-y-[99%] py-[3vw]">
            <div className="border-y border-dark-1/60 flex secondText overflow-hidden">
              <motion.h3
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: "18",
                }}
                className="text-[9vw] leading-tight uppercase text-dark-1 whitespace-nowrap mr-3"
              >
                Just Do It • Just Do It • Just Do It • Just Do It •
              </motion.h3>
              <motion.h3
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: "18",
                }}
                className="text-[9vw] leading-tight uppercase text-dark-1 whitespace-nowrap"
              >
                Just Do It • Just Do It • Just Do It • Just Do It •{" "}
              </motion.h3>
            </div>
          </div>
        </div>
      </section>
      <CursorAnimate
        cursorLabelClassName="size-[60px] text-dark-1"
        cursorClassName="size-[60px] bg-light-1"
        animate={enter ? "enter" : "closed"}
      >
        Shop
      </CursorAnimate>
    </>
  );
};
export default Page;
