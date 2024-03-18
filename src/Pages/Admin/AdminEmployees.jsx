import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import { NavLink } from "react-router-dom";
import ProfileCard from "../../Components/Cards/ProfileCard";

const AdminEmployees = () => {
  return (
    <AdminLayout>
     <div className="flex justify-center items-center h-[88vh] p-4 overflow-hidden">
        <div className="border rounded-md h-full w-full shadow-lg bg-slate-50 overflow-auto">
          <div className="flex justify-between p-10">
            <div
              className=" pb-5 text-red-500"
              style={{ fontFamily: "cursive" }}
            >
              <span className="me-2">👉</span>
              <span className="underline hover:text-lime-600">
                List of Employees, Select those you want to give ratings....
              </span>
            </div>
            <div className="ml-5 flex w-[30%] items-center justify-between">
              <input
                type="search"
                className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-400 dark:focus:border-primary"
                placeholder="Search Employee"
                aria-label="Search"
                aria-describedby="button-addon2"
              />

              <span
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="blue"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminEmployees;
