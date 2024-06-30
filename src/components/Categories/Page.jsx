import React, { useState } from "react";
import useCursor from "../../hooks/useCursor";
import Category from "./Category";
import CategoryModal from "./CategoryModal";
import categories from "../../constants/categories";
import TextAnimate from "../TextAnimate";
import splitText from "../../utils/splitText";
import Send from "../../icons/Send";

const Page = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { hideCursor, defaultCursor } = useCursor();

  const characters = splitText("Categories–");

  return (
    <section
      className="h-screen w-full flex flex-col gap-y-4 mt-[4vw] lg:mb-[8vw] rounded-t-xl max-[768px]:translate-y-[108px] max-[768px]:py-8"
      id="categories"
    >
      <div className="flex mb-[2.4vw] pl-[8vw]">
        <Send
          className="inline-block size-[8px] lg:size-[16px] ml-1 rotate-90"
          pathClassname="stroke-dark-1"
        />
        {characters.map((character, idx) => {
          return (
            <TextAnimate
              key={idx}
              value={character}
              className="font-black uppercase text-[1.9rem] md:text-[3.5vw] text-dark-1/90 leading-[1.8rem] md:leading-[4.2vw] font-apercuRegular"
              every
              delay={0.03 * idx}
              marginRight={idx === 9 ? "16px" : ""}
            />
          );
        })}
      </div>
      <div
        className="w-full flex flex-col justify-center items-center"
        onMouseEnter={() => hideCursor()}
        onMouseLeave={() => defaultCursor()}
      >
        {categories.map((category, index) => {
          return (
            <Category
              index={index}
              title={category.title}
              setModal={setModal}
              key={index}
              subTitle={category.subtitle}
              to={category.to}
            />
          );
        })}
      </div>

      <CategoryModal modal={modal} categories={categories} />
    </section>
  );
};

export default Page;
