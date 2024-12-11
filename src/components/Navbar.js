import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo and Dropdown */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-purple-800 font-semibold text-lg ml-2">
              Spinny
            </span>
          </div>
          <div className="relative">
            <button className="text-gray-700 flex items-center">
              Gurugram
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by owner count"
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 absolute left-3 top-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l5 5"
              />
            </svg>
          </div>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex items-center space-x-6">
          <div className="relative group">
            <button className="text-gray-700 font-medium flex items-center">
              Buy car
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="relative group">
            <button className="text-gray-700 font-medium flex items-center">
              Sell car
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="relative group">
            <button className="text-gray-700 font-medium flex items-center">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="text-gray-700 font-medium flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.166 9.627a5.994 5.994 0 013.175-6.102 6.002 6.002 0 0112.175 2.898h2.21l-3.7 4.7-4.06-4.7h2.392c0-.224-.032-.442-.084-.654a4.002 4.002 0 00-7.606 1.497H4.116a6.006 6.006 0 00-1.95 8.068z" />
            </svg>
            Shortlisted
          </div>
          <div className="text-purple-700 font-medium">
            Call us at
            <span className="font-bold ml-1">727-727-7275</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
