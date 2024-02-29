import React from "react";

const PageLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        className="animate-spin mr-3 h-8 w-8 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          className="opacity-75"
          fill="#476fb4"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM16 4.709A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4z"
        ></path>
      </svg>
    </div>
  );
};

export default PageLoader;