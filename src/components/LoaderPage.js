import React from "react";

const LoaderPage = () => {
  return (
    <div className="flex justify-center items-center space-x-2 min-h-screen">
      <div
        className="spinner-border animate-spin border-dashed inline-block w-14 h-14 border-4 border-green-500 rounded-full"
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default LoaderPage;
