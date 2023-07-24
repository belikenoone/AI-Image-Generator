import React from "react";

const Loader = () => {
  return (
    <div className="h-[100dvh] w-full inset-0 fixed bg-[rgba(0,0,0,0.7)] grid place-items-center">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loader;
