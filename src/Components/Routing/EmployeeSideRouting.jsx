import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaRegEdit } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";
import { ImProfile } from "react-icons/im";

const EmployeeSideRouting = () => {
  return (
    <div className="m-5 hidden sm:block">
      <div className="flex flex-col sm:h-[77vh] border-2 rounded-lg shadow-lg bg-slate-50">
        <div
          className={`border-b-2 p-2 text-center my-1 `}
          style={{ fontFamily: "revert-layer" }}
        >
          <NavLink
            to="/employee-home"
            className={({ isActive }) =>
              `${
                isActive ? "text-green-700" : "text-black"
              } text-lg uppercase flex justify-center`
            }
          >
            <FaHome className="me-1 mt-1" size={18} /> <span>Home</span>
          </NavLink>
        </div>

        <div
          className={`border-b-2 p-2 text-center my-1 `}
          style={{ fontFamily: "revert-layer" }}
        >
          <NavLink
            to="/employee-addTask"
            className={({ isActive }) =>
              `${
                isActive ? "text-green-700" : "text-black"
              } text-lg uppercase flex justify-center`
            }
          >
            <FaRegEdit className="mt-1 me-1" size={18} /> <span>Add Tasks</span>
          </NavLink>
        </div>
        <div
          className={`border-b-2 p-2 text-center my-1`}
          style={{ fontFamily: "revert-layer" }}
        >
          <NavLink
            to="/employee-taskResponse"
            className={({ isActive }) =>
              `${
                isActive ? "text-green-700" : "text-black"
              } text-lg uppercase flex justify-center`
            }
          >
            <MdTaskAlt className="mt-1 me-1" size={20} /> <span>Response</span>
          </NavLink>
        </div>
        <div
          className={`border-b-2 p-2 text-center my-1 `}
          style={{ fontFamily: "revert-layer" }}
        >
          <NavLink
            to="/employee-about"
            className={({ isActive }) =>
              `${
                isActive ? "text-green-700" : "text-black"
              } text-lg uppercase flex justify-center`
            }
          >
            <ImProfile className="mt-1.5 me-1" size={16} /> <span>Profile</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSideRouting;
