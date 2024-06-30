import React from "react";
import logo from "../../assets/nike.svg";
import { navigations } from "../../constants/navigation";
import CustomLink from "../CustomLink";
import useCursor from "../../hooks/useCursor";
import SendButton from "../SendButton";

const NavBar = () => {
  const { hideCursor, defaultCursor } = useCursor();

  return (
    <nav className="w-full flex justify-between items-center py-[1.6vw]">
      <div>
        <img src={logo} alt="logo" className="size-[48px] lg:size-[4vw]" />
      </div>
      <menu
        className="hidden md:flex gap-x-[1.6vw]"
        onMouseEnter={hideCursor}
        onMouseLeave={defaultCursor}
      >
        {navigations.map(({ path, name }, idx) => {
          return (
            <li key={idx}>
              <CustomLink
                to={path}
                value={name}
                className="font-apercuRegular"
                circleClassName="bg-dark-1"
              />
            </li>
          );
        })}
      </menu>
      <SendButton
        btnClassName="w-fit h-fit bg-dark-1 px-4 md:px-5 py-2"
        className="text-light-3 text-sm md:text-base lg:text-xl  font-apercuRegular uppercase"
        text="Contact Us"
        circleBgColor="#444"
        to="https://www.nike.com/in/help"
      />
    </nav>
  );
};

export default NavBar;
