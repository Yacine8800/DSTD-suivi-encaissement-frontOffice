import React from "react";

const LoaderData = () => {
  return (
    <div className="flex justify-center items-center w-24 h-24 gap-1.5">
      <span className="w-1 h-8 bg-blue-500 animate-scale delay-800"></span>
      <span className="w-1 h-8 bg-green-500 animate-scale delay-700"></span>
      <span className="w-1 h-8 bg-yellow-500 animate-scale delay-600"></span>
      <span className="w-1 h-8 bg-yellow-500 animate-scale delay-500"></span>
      <span className="w-1 h-8 bg-blue-400 animate-scale"></span>
    </div>
  );
};

export default LoaderData;
