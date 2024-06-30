import React, { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "../Magnetic";
import { HashLink } from "react-router-hash-link";

const CustomLink = ({ value, className, to, circleClassName }) => {
  const [hover, setHover] = useState(false);
  const characters = value.split("");

  const spanVariantsUp = {
    initial: {
      y: 0,
    },
    onHover: {
      y: "-100%",
    },
    closed: {
      y: 0,
      transition: { duration: 0.45, ease: [0.32, 0, 0.67, 0] },
    },
  };
  const spanVariantsDown = {
    initial: {
      y: "100%",
    },
    onHover: {
      y: 0,
    },
    closed: {
      y: "100%",
      transition: { duration: 0.45, ease: "backInOut" },
    },
  };
  const circleVariants = {
    initial: {
      width: 0,
      height: 0,
    },
    onHover: {
      width: "7px",
      height: "7px",
    },
    closed: {
      width: 0,
      height: 0,
      transition: { duration: 0.45, ease: "backInOut" },
    },
  };

  return (
    <Magnetic>
      <HashLink to={to} className="inline-block">
        <motion.div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="relative cursor-pointer"
          initial="initial"
          animate={hover ? "onHover" : "closed"}
        >
          <motion.span
            className={
              "relative overflow-hidden whitespace-nowrap inline-block " +
              className
            }
            initial="initial"
            animate={hover ? "onHover" : "closed"}
            transition={{ staggerChildren: 0.01 }}
          >
            {characters.map((character, idx) => {
              return (
                <motion.span
                  key={idx}
                  variants={spanVariantsUp}
                  transition={{
                    ease: "backInOut",
                    duration: 0.45,
                  }}
                  className="inline-block"
                >
                  {character}
                </motion.span>
              );
            })}
            <div className="absolute inset-0">
              {characters.map((character, idx) => {
                return (
                  <motion.span
                    key={idx}
                    variants={spanVariantsDown}
                    transition={{ ease: "backInOut", duration: 0.45 }}
                    className="inline-block"
                  >
                    {character}
                  </motion.span>
                );
              })}
            </div>
          </motion.span>
          <motion.div
            className={
              "rounded-full absolute top-[-30%] left-[50%] -translate-x-[50%] " +
              circleClassName
            }
            variants={circleVariants}
          />
        </motion.div>
      </HashLink>
    </Magnetic>
  );
};

export default CustomLink;
