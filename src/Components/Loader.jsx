import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;

