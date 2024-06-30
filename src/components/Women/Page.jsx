import React, { useState } from "react";
import useCursor from "../../hooks/useCursor";
import { Link } from "react-router-dom";
import CursorAnimate from "../CursorAnimate";

const Page = () => {
  const { hideCursor, defaultCursor } = useCursor();
  const [enter, setEnter] = useState(false);

  return (
    <>
      <section
        className="h-full lg:h-screen w-full flex flex-col justify-center items-center px-4 md:px-[2.2vw] mt-[38px] mb-[48px] md:mt-0 md:mb-[208px]"
        id="women"
      >
        <h2 className="text-3xl md:text-[4.5vw] font-apercuRegular font-black md:mb-6">
          Don't Miss
        </h2>
        <Link
          to="https://www.nike.com/in/w/matching-sets-jordan-2lukpz37eef"
          target="_blank"
        >
          <div
            className="relative flex justify-center items-center w-full h-full"
            onMouseEnter={() => {
              hideCursor();
              setEnter(true);
            }}
            onMouseLeave={() => {
              defaultCursor();
              setEnter(false);
            }}
          >
            <img
              src="/women.jpg"
              alt="women"
              className="object-cover w-[90%]"
            />
            <h4 className="absolute text-white font-apercuRegular text-[8vw]">
              Women Sports
            </h4>
          </div>
        </Link>
      </section>
      <CursorAnimate
        cursorLabelClassName="size-[60px] text-green"
        cursorClassName="size-[60px] bg-dark-1"
        animate={enter ? "enter" : "closed"}
      >
        Explore
      </CursorAnimate>
    </>
  );
};

export default Page;
