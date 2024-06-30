import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import { AnimatePresence, useAnimation, motion } from "framer-motion";
import Magnetic from "../Magnetic";
import useCursor from "../../hooks/useCursor";
import gsap from "gsap";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const { hideCursor, defaultCursor } = useCursor();

  const [showMenu, setShowMenu] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showMenu) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0 });
      setIsActive(false);
    }
  }, [showMenu, controls]);

  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.35 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
    hideCursor();
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
    defaultCursor();
  };

  return (
    <>
      <Magnetic>
        <motion.div
          onClick={() => {
            setIsActive(!isActive);
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={controls}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          onMouseEnter={manageMouseEnter}
          onMouseLeave={manageMouseLeave}
          className={`fixed right-4 top-4 size-[5vw] min-w-[75px] min-h-[75px] rounded-full ${
            !isActive ? "bg-[#444]" : "bg-light-3"
          } cursor-pointer flex justify-center items-center overflow-hidden  z-20`}
        >
          <div className={`burger ${isActive ? "burgerActive" : ""}`} />
          <div
            ref={circle}
            className={`w-full h-[150%] absolute rounded-full top-[100%] z-30 ${
              !isActive ? "bg-[#555]" : "bg-light-2"
            }`}
          ></div>
        </motion.div>
      </Magnetic>
      <AnimatePresence mode="wait">
        {isActive && <Nav setActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
};

export default Menu;
