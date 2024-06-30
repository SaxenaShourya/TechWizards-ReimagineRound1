import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useCursor from "../../hooks/useCursor";
import { Link } from "react-router-dom";

const Button = ({
  children,
  circleBgColor = "#1f1f1f",
  bgColor,
  className,
  btnClassName,
  to,
}) => {
  const { hideCursor, defaultCursor } = useCursor();

  const circle = useRef(null);
  const button = useRef(null);
  const text = useRef(null);
  useEffect(() => {
    const xTo = gsap.quickTo(button.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.45)",
    });
    const yTo = gsap.quickTo(button.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.45)",
    });
    const xTextTo = gsap.quickTo(text.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.45)",
    });
    const yTextTo = gsap.quickTo(text.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.45)",
    });

    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768) {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          button.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.45);
        yTo(y * 0.45);
        xTextTo(x * 0.45);
        yTextTo(y * 0.45);
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth >= 768) {
        xTo(0);
        yTo(0);
        xTextTo(0);
        yTextTo(0);
      }
    };

    button.current.addEventListener("mousemove", handleMouseMove);
    button.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.current.removeEventListener("mousemove", handleMouseMove);
      button.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  let timeline = useRef(null);

  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
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
    <Link to={to} target="_blank">
      <button
        className={
          `rounded-full cursor-pointer relative flex justify-center items-center btn overflow-hidden ` +
          btnClassName
        }
        style={{ backgroundColor: bgColor }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        ref={button}
      >
        <p className={"relative z-[1] transition-all " + className} ref={text}>
          {children}
        </p>
        <div
          ref={circle}
          className={`w-full h-[150%] absolute rounded-full top-[100%]`}
          style={{ backgroundColor: circleBgColor }}
        ></div>
      </button>
    </Link>
  );
};

export default Button;
