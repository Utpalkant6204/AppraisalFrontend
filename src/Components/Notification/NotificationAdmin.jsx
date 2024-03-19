import React, { useEffect, useState } from "react";
import useNotification from "../../Hooks/useNotification";
import { RxCross1 } from "react-icons/rx";

const NotificationAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { loading, error, data, deteleData, deteleAll } = useNotification(
    isOpen,
    clicked
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = (data) => {
    deteleData(data, setClicked);
  };

  const handleClickAll = () => {
    deteleAll(setClicked);
  };

  return (
    <>
      <div className="relative inline-block">
        <button
          id="dropdownHoverButton"
          onClick={toggleDropdown}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-4"
          type="button"
        >
          Notifications ({data.length}){" "}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            id="dropdownHover"
            className="absolute opacity-100 bg-white divide-y divide-gray-100 rounded-lg shadow w-[400px] dark:bg-gray-700"
            style={{ top: "calc(100% + 10px)", right: "0" }}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              {data.map((data) => (
                <li key={data.id} className="flex justify-between">
                  <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {data.employeeName} ({data.employeeId}) added tasks for
                    appraisable process....
                  </p>
                  <button
                    className="me-4 text-red-100"
                    onClick={() => handleDelete(data)}
                  >
                    <RxCross1 />
                  </button>
                </li>
              ))}
              {data.length > 0 && (
                <li className="flex justify-center">
                  <button
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-red-400"
                    onClick={handleClickAll}
                  >
                    Delete All
                  </button>
                </li>
              )}

              {data.length < 1 && (
                <li className="flex justify-center">
                  <p className=" text-center block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-ful">
                    No Notifications...
                  </p>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationAdmin;
