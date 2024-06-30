import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useCursor from "../../hooks/useCursor";
import Send from "../../icons/Send";
import { Link } from "react-router-dom";

const SendButton = ({
  circleBgColor = "#111",
  btnClassName,
  bgColor,
  className,
  text,
  to,
}) => {
  const { hideCursor, defaultCursor } = useCursor();

  const circle = useRef(null);
  const send = useRef(null);
  const sendIcon = useRef(null);

  let timeline = useRef(null);

  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.25, ease: "power3.in" },
        "enter"
      )
      .to(
        send.current,
        {
          width: "24px",
          height: "24px",
          right: "6%",
          duration: 0.25,
        },
        "enter"
      )
      .to(
        sendIcon.current,
        {
          width: "12px",
          height: "12px",
          duration: 0.25,
        },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      )
      .to(
        send.current,
        {
          width: "10px",
          height: "10px",
          right: "12%",
          duration: 0.25,
        },
        "exit"
      )
      .to(
        sendIcon.current,
        {
          width: "0px",
          height: "0px",
          duration: 0.25,
        },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
    hideCursor();
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
    defaultCursor();
  };
  return (
    <Link to={to} target="_blank" className="hidden xs:block">
      <button
        className={
          `rounded-full cursor-pointer relative flex justify-center items-center btn overflow-hidden ` +
          btnClassName
        }
        style={{ backgroundColor: bgColor }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
      >
        <p className={"relative z-[1] transition-all pr-8 " + className}>
          {text}
        </p>
        <span
          className="z-[1] size-[7px] bg-white rounded-full absolute top-[55%] sm:top-[50%] -translate-y-[60%] right-[12%] flex justify-center items-center"
          ref={send}
        >
          <span ref={sendIcon} className="size-[0px]">
            <Send
              className="w-full h-full z-[1]"
              pathClassname="stroke-black"
            />
          </span>
        </span>
        <div
          ref={circle}
          className={`w-full h-[150%] absolute rounded-full top-[100%]`}
          style={{ backgroundColor: circleBgColor }}
        ></div>
      </button>
    </Link>
  );
};

export default SendButton;
