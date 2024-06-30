import React from "react";

const Globe = ({ className, pathClassname }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="none"
      className={className}
    >
      <path
        className={pathClassname}
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"
      ></path>
    </svg>
  );
};

export default Globe;
