import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const ScrollText = ({
  value,
  className,
  sectionRef,
  start,
  end,
  counter,
  counterClassName,
  onMouseOver,
  onMouseLeave,
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = textRef.current;
    const section = sectionRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start,
        end,
        scrub: 2,
      },
    });
    tl.to(el, {
      width: "105%",
    });
  }, [sectionRef, start, end]);

  return (
    <div
      className="relative"
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <span className={"relative opacity-20 " + className}>{value}</span>

      <span
        className={
          "absolute top-0 left-0 whitespace-nowrap overflow-hidden w-[0%] " +
          className
        }
        ref={textRef}
      >
        {value}
      </span>
      {counter && (
        <span className={"absolute " + counterClassName}>{counter}</span>
      )}
    </div>
  );
};

export default ScrollText;
