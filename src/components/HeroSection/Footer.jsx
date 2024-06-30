import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../Button";
import { motion } from "framer-motion";
import ArrowDown from "../../icons/ArrowDown";
import { Link } from "react-router-dom";

const Footer = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  const setPath = () => {
    const svgWidth = svgRef.current.getBoundingClientRect().width;
    const pathString = `M 0 50 Q ${svgWidth / 2} 50 ${svgWidth} 50`;
    pathRef.current.setAttribute("d", pathString);
  };

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768) {
        const rect = svg.getBoundingClientRect();
        const relativeY = e.clientY - rect.top;
        const pathString = `M 0 50 Q ${rect.width / 2} ${relativeY} ${
          rect.width
        } 50`;
        gsap.to(path, {
          attr: {
            d: pathString,
          },
          duration: 1.8,
          ease: "elastic.out(2, 0.3)",
        });
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth >= 768) {
        setPath();
        gsap.to(path, {
          attr: {
            d: pathRef.current.getAttribute("d"),
          },
          duration: 1.8,
          ease: "elastic.out(2, 0.3)",
        });
      }
    };

    setPath(); // Set initial path
    window.addEventListener("resize", setPath);
    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", setPath);
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="w-full relative">
      <svg ref={svgRef} width="100%" height="100" className="">
        <path
          fill="transparent"
          stroke="#1f1f1f"
          strokeWidth="1"
          ref={pathRef}
          className="string"
        />
      </svg>
      <Link
        to="https://www.nike.com/in/w/pegasus-shoes-8nexhzy7ok"
        target="_blank"
      >
        <motion.h5
          className="font-apercuRegular text-[0.75rem] absolute top-[70%] text-gray-600 left-[10px]"
          initial="initial"
          whileHover="onHover"
        >
          Feel the responsive energy
          <motion.span
            className="w-full h-[0.5px] bg-gray-600 absolute bottom-[3px] left-0"
            variants={{ initial: { width: 0 }, onHover: { width: "100%" } }}
          ></motion.span>
        </motion.h5>
      </Link>

      <div className="absolute top-0 right-[40px] -translate-y-[5%] md:-translate-y-[15%]">
        <Button
          bgColor="#d8f288"
          className="uppercase text-base"
          btnClassName="text-dark-1 hover:text-light-1 size-[110px] md:size-[150px]"
          to="https://www.nike.com/in/t/pegasus-41-road-running-shoes-SKDkNs"
        >
          Run in pegasus
        </Button>
      </div>
      <motion.div
        initial={{ y: "20%" }}
        animate={{ y: "-20%" }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          duration: 0.8,
        }}
        className="absolute bottom-[-50%] left-[50%] -translate-x-[50%]"
      >
        <ArrowDown pathClassname="stroke-light-3" />
      </motion.div>
    </div>
  );
};

export default Footer;
