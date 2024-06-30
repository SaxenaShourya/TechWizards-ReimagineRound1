import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import TextAnimate from "../TextAnimate";
import SendArrow from "../../icons/Send";
import Logo from "../../icons/Logo";
import { Link } from "react-router-dom";

const Page = () => {
  const textClasses =
    "font-black uppercase text-[4.5rem] md:text-[12vw] text-dark-1 leading-[3.8rem] md:leading-[9vw] font-foundersGrotesk";
  return (
    <main className="h-screen w-full flex flex-col px-4 md:px-[2.2vw]" id="#">
      <NavBar />
      <section className="flex flex-col w-full h-full mt-8 gap-y-8">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-y-12">
          <div className="font-black uppercase text-[12vw] text-[#1f1f1f] leading-[9vw]">
            <div className="w-fit flex">
              {["do", "not"].map((word, idx) => {
                return (
                  <TextAnimate
                    key={idx}
                    value={word}
                    className={textClasses}
                    delay={idx === 0 ? "2.9" : "3.1"}
                    marginRight={idx === 0 ? "16px" : ""}
                  />
                );
              })}
            </div>
            <div className="w-fit ">
              <Link
                to="https://www.nike.com/in"
                target="_blank"
                className="flex"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "148px" }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ ease: "backOut", duration: "1.2", delay: "5" }}
                  className="w-0 h-[3.4rem] md:h-[8vw] bg-green relative top-[1.3vh] md:top-[2vh] left-0 rounded-[.6vw] mr-[0.8vw] flex justify-center items-center"
                >
                  <Logo
                    className="fill-dark-1 w-[50%] h-[80%]"
                    pathClassname="stroke-dark-1"
                  />
                </motion.div>

                <TextAnimate
                  value="waste"
                  className={textClasses}
                  delay="3.4"
                />
              </Link>
            </div>
            <div className="w-fit flex">
              {["your", "energy."].map((word, idx) => {
                return (
                  <TextAnimate
                    key={idx}
                    value={word}
                    className={textClasses}
                    delay={idx === 0 ? "3.9" : "4.1"}
                    marginRight={idx === 0 ? "16px" : ""}
                  />
                );
              })}
            </div>
          </div>
          <Link
            to="https://www.nike.com/in/w/sale-3yaep"
            className="w-full md:w-[20%] mb-6"
            target="_blank"
          >
            <SendArrow
              className="rotate-90 mb-2 md:mb-6"
              pathClassname="stroke-light-3"
            />
            <h3 className="uppercase text-dark-1 text-[1.9rem] md:text-[2.2vw] leading-[1.3rem] md:leading-[1.6vw]">
              New styles on sale.
              <br />
              <span className="text-dark-2/60 capitalize font-apercuRegular text-base md:text-sm">
                Up to 40% Off
              </span>
            </h3>
          </Link>
        </div>

        <Footer />
      </section>
    </main>
  );
};

export default Page;
