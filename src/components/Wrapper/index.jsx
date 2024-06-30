import React, { useEffect, useState } from "react";
import Cursor from "../Cursor";
import { AnimatePresence } from "framer-motion";
import Preloader from "../Preloader";
import Lenis from "lenis";
import Menu from "../Menu";

const Wrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);

      document.body.style.cursor = "default";

      window.scrollTo(0, 0);
    }, 2900);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && <div className="bg-light-1">{children}</div>}
      {!isLoading && <Menu />}
      <Cursor />
    </>
  );
};

export default Wrapper;
