import React from "react";
import splitText from "../../utils/splitText";
import { motion } from "framer-motion";

const TextAnimate = () => {
  const mainText = splitText("Nike");

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    reveal: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div className="absolute h-screen z-[999] w-full flex flex-col justify-center items-center translate-y-[-5%] bg-dark-1">
      <motion.h1
        className="text-[4rem] md:text-[14vw] xl:text-[184px] font-futura font-semibold text-light-3 uppercase overflow-hidden"
        initial="hidden"
        animate="reveal"
        transition={{ staggerChildren: 0.2 }}
      >
        {mainText.map((char, idx) => {
          return (
            <motion.span
              variants={charVariants}
              transition={{
                duration: 2,
                stiffness: 450,
                damping: 100,
                ease: "backInOut",
              }}
              style={{
                display: "inline-block",
              }}
              key={idx}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
    </motion.div>
  );
};

export default TextAnimate;
