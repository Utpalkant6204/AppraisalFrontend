import React, { useState } from "react";
import useUserAvailability from "../../Hooks/useUserAvailability";

const Header = () => {
  const { available } = useUserAvailability();

  return (
    <div className="sticky top-0 left-0 w-full z-50  backdrop-blur-lg bg-opacity-80 p-2">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <a className="flex flex-shrink-0 items-center" href="">
              <img
                className="block h-12 w-auto"
                src="https://www.beehyv.com/wp-content/uploads/2020/10/logo.svg"
              />
            </a>
          </div>
          {!available && (
            <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
              <a
                className="text-white hover:text-green-700 text-lg hover:border-green-700"
                href="/login"
                id="login"
              >
                Login
              </a>
              <a
                className="text-gray-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-lg rounded-md shadow-sm "
                href="/signup"
              >
                Sign up
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
    // <div>hello ji</div>
  );
};

export default Header;
