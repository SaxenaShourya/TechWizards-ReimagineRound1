import React from "react";

const Send = ({ className, pathClassname }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.5 5L6.5 19"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassname}
      />
      <path
        d="M10.23 5L20.5 5L20.5 15.27"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassname}
      />
    </svg>
  );
};

export default Send;
