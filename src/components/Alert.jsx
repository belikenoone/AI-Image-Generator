import React from "react";

const Alert = ({ errorMessage }) => {
  return (
    <div className="h-[100dvh] w-full inset-0 fixed bg-[rgba(0,0,0,0.7)] ">
      <div className="alert alert-error absolute bottom-3  w-3/4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default Alert;
