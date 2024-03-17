import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function EmployeeHeader() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = useNavigate();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const check = () => {
    try {
      const data = sessionStorage.getItem("user") || null;

      if (data) {
        sessionStorage.removeItem("user");
        navigation("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const HandleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    check();
  };

  return (
    <header className="sticky z-0 top-0 bg-red">
      <nav className="px-4 lg:px-6 py-2.5 bg-slate-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/employee-home" className="flex items-center">
            <img
              src="https://www.beehyv.com/wp-content/uploads/2020/10/logo.svg"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          {/* Collapse button for smaller screens */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="text-gray-700"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Mobile menu */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:hidden w-full`}
          >
            <ul className="flex flex-col mt-4 font-medium">
              <li>
                <NavLink
                  to="/employee-home"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-gray-700"
                    } border-b border-gray-700 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/employee-about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-gray-700"
                    } border-b border-gray-700 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  Profile
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/employee-addTask"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-gray-700"
                    } border-b border-gray-700 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  Task
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/employee-taskResponse"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-500" : "text-gray-700"
                    } border-b border-gray-700 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0`
                  }
                >
                  Response
                </NavLink>
              </li>

              <li>
                <button
                  onClick={HandleClick}
                  className="w-full text-start block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-700 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center justify-between lg:order-2">
            <NavLink
              to="/employee-about"
              className="border-2 rounded-full cursor-pointer border-blue-500"
            >
              <CgProfile size={28} color="#1D85FA" />
            </NavLink>

            <button
              onClick={HandleClick}
              className="text-white bg-orange-700 ms-5 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default EmployeeHeader;
