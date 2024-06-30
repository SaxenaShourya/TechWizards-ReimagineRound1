import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const CursorAnimate = ({
  children,
  animate,
  cursorClassName,
  cursorLabelClassName,
}) => {
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  useEffect(() => {
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);
  return (
    <>
      <motion.div
        className={
          "rounded-full absolute z-[1] hidden md:flex justify-center items-center pointer-events-none " +
          cursorClassName
        }
        variants={scaleAnimation}
        initial="initial"
        ref={cursor}
        animate={animate}
      ></motion.div>
      <motion.div
        className={
          "pointer-events-none z-[2] absolute hidden md:flex justify-center items-center " +
          cursorLabelClassName
        }
        variants={scaleAnimation}
        initial="initial"
        animate={animate}
        ref={cursorLabel}
      >
        {children}
      </motion.div>
    </>
  );
};

export default CursorAnimate;
