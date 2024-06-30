import { motion } from "framer-motion";
import React from "react";

const ScrollUpText = ({ value, className, marginRight, delay, every }) => {
  const words = value.split(" ");
  const slideUp = {
    initial: {
      y: "100%",
    },
    animate: (i) => ({
      y: "0%",

      transition: {
        duration: 0.5,
        delay: delay ? delay : 0.01 * i,
      },
    }),
  };

  return (
    <p className={" " + className}>
      {words.map((word, idx) => {
        return (
          <span
            className="overflow-hidden inline-flex relative"
            style={{ marginRight }}
            key={idx}
          >
            <motion.span
              custom={idx}
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: !every && true }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};

export default ScrollUpText;
