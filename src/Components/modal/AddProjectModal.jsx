import React, { useState, useEffect } from "react";
import Axios from "axios";
import useSaveProjects from "../../Hooks/useSaveProjects";

const Modal = ({ closeModal }) => {
  const { handleSubmit, error } = useSaveProjects();
  const [input, setInput] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    appraisable: false,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setInput({ ...input, [name]: value });
  };

  const handleCheck = (e) => {
    setInput({ ...input, appraisable: e.target.checked });
  };

  const handleClick = () => {
    console.log(input);
    handleSubmit(input, closeModal);
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg p-8">
          <button className="absolute top-0 right-0 p-4" onClick={closeModal}>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <h2 className="text-lg font-bold mb-4">Add Projects</h2>
          <form onSubmit={handleClick}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Project Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-00 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  required
                  placeholder="project name...."
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name1"
                >
                  Project Description
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-00 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name1"
                  type="text"
                  required
                  placeholder="which area you wroked....."
                  name="description"
                  value={input.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name2"
                >
                  Start Date
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-00 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name2"
                  type="date"
                  required
                  name="startDate"
                  value={input.startDate}
                  placeholder="which area you wroked....."
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name3"
                >
                  End Date
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-00 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name3"
                  type="date"
                  required
                  placeholder="which area you wroked....."
                  name="endDate"
                  value={input.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6 ps-32">
              <input
                type="checkbox"
                id="inline"
                className="me-2"
                checked={input.appraisable}
                name="appraisable"
                onChange={handleCheck}
              ></input>
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0"
                htmlFor="inline"
              >
                Appraisable
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2"
              >
                Add
              </button>
              {error && <p className="text-red-500">Something error Happpens..</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
