import React from "react";
import Button from "../components/Button";
import Send from "../icons/Send";
import { motion } from "framer-motion";
import { help, resources, company } from "../constants/footer";
import splitText from "../utils/splitText";
import TextAnimate from "../components/TextAnimate";
import Globe from "../icons/Globe";
import { Link } from "react-router-dom";

const Footer = () => {
  const characters = splitText("Just Do It");
  return (
    <footer className="h-full w-full px-[3vw] relative">
      <div className="border-t border-light-3/95 flex justify-center items-center">
        {characters.map((character, idx) => {
          return (
            <TextAnimate
              key={idx}
              value={character}
              className="font-black uppercase text-[12.5vw] text-dark-1/90 leading-[12.2vw] font-foundersGrotesk"
              every
              delay={0.03 * idx}
              marginRight={idx !== 0 ? (idx % 3 === 0 ? "16px" : "") : ""}
            />
          );
        })}
      </div>
      <div className="absolute top-0 right-0 flex gap-1 text-dark-1/70 -translate-x-[20%] md:-translate-x-[80%] translate-y-[40%]">
        <Globe pathClassname="stroke-dark-1/70" />
        <p className="font-apercuRegular">India</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-[2vh]">
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center relative p-28">
          <h3 className="text-[4vw] font-apercuRegular absolute top-0 left-0">
            Help:
          </h3>
          <Button
            btnClassName="size-[250px] bg-green border border-dark-1/15"
            className="text-dark-1 text-[1.8rem] md:text-[2.6vw] font-futuraCondensed"
            circleBgColor="#1f1f1f"
            to="https://www.nike.com/in/help"
          >
            Want Help?
          </Button>
        </div>
        <div className="w-full md:w-fit flex flex-col space-y-10 mr-8 md:mt-24 px-6 md:px-0">
          <div>
            <p className="text-dark-1/70 mb-2 text-base">Help:</p>
            {help.map((word, idx) => {
              return (
                <Link to={word.to} target="_blank" key={idx}>
                  <motion.p
                    initial="initial"
                    whileHover="onHover"
                    className="text-dark-1 text-xl ml-3 mb-1 cursor-pointer relative w-fit overflow-hidden"
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
          <div>
            <p className="text-dark-1/60 mb-4 text-base">Resources:</p>
            {resources.map((word, idx) => {
              return (
                <Link to={word.to} target="_blank" key={idx}>
                  <motion.p
                    initial="initial"
                    whileHover="onHover"
                    className="text-dark-1 text-xl ml-3 mb-1 cursor-pointer relative w-fit overflow-hidden"
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
        <div className="w-full md:w-fit mr-8 md:mt-24  px-6 md:px-0">
          <p className="text-dark-1/60 mb-4 text-base">Company:</p>
          {company.map((word, idx) => {
            return (
              <Link to={word.to} target="_blank" key={idx}>
                <motion.p
                  initial="initial"
                  whileHover="onHover"
                  className="text-dark-1 text-xl ml-3 mb-1 cursor-pointer relative w-fit overflow-hidden"
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
      <div className="border-t border-light-3/95 w-full text-center">
        <h6 className="font-apercuRegular text-sm py-2 text-gray-600">
          {" "}
          &copy; 2024 Nike, Inc. All rights reserved
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
