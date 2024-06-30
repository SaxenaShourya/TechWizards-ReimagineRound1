import React, { useState } from "react";
import { slide, scale, menuSlide } from "./variants.js";
import { motion } from "framer-motion";
import CustomLink from "../CustomLink";
import useCursor from "../../hooks/useCursor";
import { navigations, socialMedias } from "../../constants/navigation";
import { HashLink } from "react-router-hash-link";

const Curve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },

    enter: {
      d: targetPath,

      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: initialPath,

      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-[#333] stroke-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

const NavLink = ({ data, isActive, setSelectedIndicator, setActive }) => {
  const { name, path, index } = data;

  return (
    <motion.div
      className="relative flex items-center font-futuraExtraBold uppercase text-[2.7rem] md:text-[4.2vw] leading-[2.6rem] md:leading-[4.2vw]"
      onMouseEnter={() => {
        setSelectedIndicator(path);
      }}
      onClick={() => setActive(false)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[10px] h-[10px] bg-green absolute rounded-full left-[-10px] md:left-[-20px]"
      ></motion.div>
      <HashLink to={path}>{name}</HashLink>
    </motion.div>
  );
};

const Footer = () => {
  const { hideCursor, defaultCursor } = useCursor();
  return (
    <div
      className="flex flex-wrap w-full justify-between text-[2vw] gap-[2vw]"
      onMouseEnter={hideCursor}
      onMouseLeave={defaultCursor}
    >
      {socialMedias.map((social, idx) => {
        return (
          <CustomLink
            key={idx}
            value={social.name}
            circleClassName="bg-green"
            className="text-[1.2rem] md:text-[1.8vw]"
            to={social.path}
          />
        );
      })}
    </div>
  );
};

const Nav = ({ setActive }) => {
  const [selectedIndicator, setSelectedIndicator] = useState();

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full md:w-[35vw] bg-[#333] text-light-2 fixed top-0 right-0 z-10"
    >
      <div className="h-full w-full p-[3vw] flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(location?.pathname);
          }}
          className="flex flex-col justify-between text-[4vw] gap-4 mt-[40px]"
        >
          <p className="text-light-3 uppercase text-[1.2rem] md:text-[1.4vw] mb-4 border-b-[1px] border-light-3">
            Navigation
          </p>
          {navigations.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.path}
                setSelectedIndicator={setSelectedIndicator}
                setActive={setActive}
              ></NavLink>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
