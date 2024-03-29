import React, { useState } from "react";
import useHandleProjects from "../../Hooks/useHandleProjects";

const AdminUpdateModal = ({ closeModal, project }) => {
  const [error1, setError1] = useState(false);
  const { handleUpdateProject, error } = useHandleProjects();
  const [input, setInput] = useState({
    name: project.name,
    description: project.description,
    startDate: project.startDate,
    endDate: project.endDate,
    appraisable: project.appraisable,
    rating: project.rating,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setInput({ ...input, [name]: value });
    setError1(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const rating = parseFloat(input.rating);

    if (isNaN(rating) || rating < 1 || rating > 10) {
      setError1(true);
      return;
    }
    handleUpdateProject(input, closeModal, project.id);
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
          <h2 className="text-lg font-bold mb-4">Update Projects</h2>
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name4"
                >
                  Rating
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-00 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name4"
                  type="number"
                  required
                  placeholder="assign rating.... (1-10)"
                  name="rating"
                  value={input.rating > 0 ? input.rating : ""}
                  onChange={handleChange}
                />
                {error1 && (
                  <p className="text-red-500 text-sm">Rating must be 1 to 10</p>
                )}
              </div>
            </div>
            <div className="md:flex md:items-center mb-6 ps-32">
              <input
                type="checkbox"
                id="inline-full-name4"
                className="me-2"
                checked={input.appraisable}
                name="appraisable"
                disabled
              ></input>
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0"
                htmlFor="inline-full-name4"
              >
                Appraisable
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2"
              >
                Assign
              </button>
              {error && (
                <p className="text-red-500">Something error Happpens..</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateModal;
