import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Category = ({ index, title, setModal, subTitle, to }) => {
  const [enter, setEnter] = useState(null);

  const variants = {
    initial: { height: 0 },
    onHover: { height: "100%" },
    closed: { height: 0 },
  };
  return (
    <Link to={to} className="w-full" target="_blank">
      <motion.div
        onMouseEnter={() => {
          setEnter(true);
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setEnter(false);
          setModal({ active: false, index });
        }}
        initial="initial"
        whileHover={enter ? "onHover" : "closed"}
        className="w-full flex justify-between items-center px-[8vw] py-[3vh] cursor-pointer transition-all duration-300 border-t-[1px] border-light-3 relative category"
      >
        <h2 className="text-[2.2rem] md:text-[4vw] transition-all duration-[0.35s] text-dark-2 font-light z-10">
          {title}
        </h2>

        <p className="text-[1.2rem] md:text-[1.7vw] transition-all duration-[0.35s] text-gray-800 font-light z-10">
          {subTitle}
        </p>
        <motion.div
          variants={variants}
          className="absolute top-0 w-full bottom-0 bg-dark-1 -translate-x-[8vw] z-[1] transition-none duration-500"
          transition={{ duration: "0.35", ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
    </Link>
  );
};

export default Category;
