import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";

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

const CategoryModal = ({ modal, categories }) => {
  const { active, index } = modal;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container

    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    //Move cursor

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    //Move cursor label

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

      xMoveContainer(pageX);

      yMoveContainer(pageY);

      xMoveCursor(pageX);

      yMoveCursor(pageY);

      xMoveCursorLabel(pageX);

      yMoveCursorLabel(pageY);
    });
  }, []);
  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-[200px] w-[190px] md:h-[350px] md:w-[400px] absolute overflow-hidden pointer-events-none hidden md:flex justify-center items-center z-30  rounded-xl"
        ref={modalContainer}
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="h-full w-full absolute categoryModalSlider"
        >
          {categories.map((category, idx) => {
            const { src } = category;

            return (
              <div
                className="h-full w-full flex justify-center items-center"
                key={idx}
              >
                <div className="w-full h-full">
                  <img
                    src={src}
                    width={0}
                    height={0}
                    alt="image"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="size-[80px] rounded-full bg-dark-1 absolute z-30 hidden md:flex justify-center items-center pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        ref={cursor}
        animate={active ? "enter" : "closed"}
      ></motion.div>

      <motion.div
        className="size-[80px] pointer-events-none text-sm z-30 absolute hidden md:flex justify-center items-center text-green"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        ref={cursorLabel}
      >
        Explore Now
      </motion.div>
    </>
  );
};

export default CategoryModal;
