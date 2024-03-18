import React, { useState } from "react";
import EmployeeLayout from "../../Layouts/EmployeeLayout";
import { VscAdd } from "react-icons/vsc";
import Loader from "../../Components/Loader/Loader";
import useUserDetails from "../../Hooks/useUserDetails";
import Modal from "../../Components/modal/AddProjectModal";

const Tasks = () => {
  const [notify, setNotify] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projects, loading, error } = useUserDetails(isModalOpen);

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = Math.floor((diffDays % 365) % 30);

    years > 0 ? years : 0;
    months > 0 ? months : 0;

    return { years, months, days };
  };

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const handleNotify = () => {
    setNotify(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(isModalOpen);

  return (
    <EmployeeLayout>
      <div className="flex justify-center items-center h-[88vh] p-4 overflow-hidden">
        <div className="border rounded-md h-full w-full shadow-lg bg-slate-50 overflow-auto">
          {loading && <Loader />}
          {error && (
            <div className="flex justify-center items-center h-full w-full">
              <div>Something Went Wrong...</div>
            </div>
          )}
          {!loading && (
            <>
              <div
                className="p-10 pb-5 text-red-500"
                style={{ fontFamily: "cursive" }}
              >
                <span className="me-2">👉</span>
                <span className="underline hover:text-lime-600">
                  Add Your Projects here that you worked on for appraisal......
                </span>
              </div>
              <div className="ps-16">
                <button
                  onClick={openModal}
                  className="flex items-center shadow-md border rounded-md bg-green-400 p-2 hover:bg-green-600 hover:text-white hover:shadow"
                >
                  <span className="me-2">
                    <VscAdd size={15} />
                  </span>
                  <span
                    className="text-lg uppercase"
                    style={{ fontFamily: "monospace" }}
                  >
                    Add Projects
                  </span>
                </button>
              </div>
              {projects.length < 1 && (
                <div
                  className="h-[50vh] w-full flex justify-center items-center cursive text-md"
                  style={{ fontFamily: "cursive" }}
                >
                  No Project added...
                </div>
              )}
              {projects.length > 0 && (
                <div className="px-16 pt-8">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="border p-2 shadow rounded-lg bg-white mb-10"
                    >
                      <div className="pt-2 px-2 pb-0 flex justify-between">
                        <div
                          className="mb-0 "
                          style={{ fontFamily: "GT Pressura" }}
                        >
                          <span className="text-lg">Project Name : </span>
                          <span className="ms-1 tex-md">{project.name}</span>
                        </div>
                        <div
                          className="mb-0 "
                          style={{ fontFamily: "GT Pressura" }}
                        >
                          <span className="text-lg">Appraisable : </span>
                          <span className="ms-1 text-md">
                            {project.appraisable ? "Yes" : "No"}
                          </span>
                        </div>
                      </div>
                      <div className="px-2 pb-0 flex justify-between">
                        <div className="" style={{ fontFamily: "GT Pressura" }}>
                          <span className="text-lg">Start Date : </span>
                          <span className="ms-1 text-md">{`${formatDate(
                            project.startDate
                          )}`}</span>
                        </div>
                        <div className="" style={{ fontFamily: "GT Pressura" }}>
                          <span className="text-lg">End Date : </span>
                          <span className="ms-1 text-md">{`${formatDate(
                            project.endDate
                          )}`}</span>
                        </div>
                      </div>
                      <div className="pb-2 px-2 flex justify-between">
                        <div
                          className="w-[65%]"
                          style={{ fontFamily: "GT Pressura, mono" }}
                        >
                          <span className="text-lg">Description : </span>{" "}
                          <span className="text-md ms-1">
                            {project.description}
                          </span>
                        </div>
                        <div
                          className=""
                          style={{ fontFamily: "GT Pressura, mono" }}
                        >
                          <span className="text-lg">Duration : </span>{" "}
                          <span className="text-md ms-1">
                            {`${
                              calculateDuration(
                                project.startDate,
                                project.endDate
                              ).years > 0
                                ? `${
                                    calculateDuration(
                                      project.startDate,
                                      project.endDate
                                    ).years
                                  } years, `
                                : ""
                            }`}
                            {`${
                              calculateDuration(
                                project.startDate,
                                project.endDate
                              ).months > 0
                                ? `${
                                    calculateDuration(
                                      project.startDate,
                                      project.endDate
                                    ).months
                                  } months, `
                                : ""
                            }`}
                            {`${
                              calculateDuration(
                                project.startDate,
                                project.endDate
                              ).days
                            } days`}
                          </span>
                        </div>
                      </div>
                      {!notify && (
                        <div className="flex justify-center pb-2">
                          <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-4 border border-green-500 hover:border-transparent rounded">
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="ps-16 pb-5 flex justify-end items-center">
                    <p
                      className="italic me-4 text-red-800 underline"
                      style={{ fontFamily: "cursive" }}
                    >
                      After Notify, you will not able to edit any project{" "}
                    </p>
                    <button
                      className="flex items-center border rounded-md bg-blue-400 p-2 hover:bg-blue-600 hover:text-white hover:shadow"
                      onClick={handleNotify}
                    >
                      <span
                        className="text-lg uppercase"
                        style={{ fontFamily: "monospace" }}
                      >
                        Notify{" "}
                      </span>
                    </button>
                  </div>
                </div>
              )}
              {isModalOpen && (
                <Modal
                  closeModal={closeModal}
                />
              )}
            </>
          )}
        </div>
      </div>
    </EmployeeLayout>
  );
};

export default Tasks;
