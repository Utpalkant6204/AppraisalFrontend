import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import Loader from "../../Components/Loader/Loader";
import useGetEmployeeAdmin from "../../Hooks/useGetEmployeeAdmin";
import { useParams } from "react-router-dom";
import AdminUpdateModal from "../../Components/modal/AdminUpdateModal";

const AdminEmployeeResponse = () => {
  const [notify, setNotify] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { fetchData, profile, projects, loading, error, notifyByEmployee } =
    useGetEmployeeAdmin();

  const { id, name } = useParams();

  useEffect(() => {
    fetchData(id);
  }, []);

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

  const openEditModal = (project) => {
    console.log(profile, "hi");
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProject(null);
  };

  console.log(projects);

  return (
    <AdminLayout>
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
              <div className="flex justify-between p-10">
                <div
                  className=" pb-5 text-red-500"
                  style={{ fontFamily: "cursive" }}
                >
                  <span className="me-2">👉</span>
                  <span className="underline hover:text-lime-600">
                    List of Projects added by{" "}
                    <span className="text-blue-500">{profile.name}</span>,{" "}
                    <span className="text-xl">
                      give ratings for appraisal...
                    </span>
                  </span>
                </div>
              </div>
              {notifyByEmployee ? (
                <div className="ps-20">
                  <div className="text-2xl underline font-mono italic text-green-900">
                    Projects
                  </div>
                  <div className="pe-4 pt-8">
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
                          <div
                            className=""
                            style={{ fontFamily: "GT Pressura" }}
                          >
                            <span className="text-lg">Start Date : </span>
                            <span className="ms-1 text-md">{`${formatDate(
                              project.startDate
                            )}`}</span>
                          </div>
                          <div
                            className=""
                            style={{ fontFamily: "GT Pressura" }}
                          >
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
                            <button
                              onClick={() => openEditModal(project)}
                              className="bg-transparent italic text-sm hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-4 border border-green-500 hover:border-transparent rounded"
                            >
                              Rating Assign
                            </button>
                            {project.rating > -1 && (
                              <div className="ms-4">
                                <p className="border rounded p-1 px-2 text-sm border-red-400">
                                  Assign Rating : {project.rating}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="ps-16 pb-5 flex justify-end items-center">
                      {!notify && (
                        <p
                          className="italic me-4 text-red-800 underline"
                          style={{ fontFamily: "cursive" }}
                        >
                          After Notify, you will not able to Add or edit any
                          project{" "}
                        </p>
                      )}
                      <button
                        className="flex items-center border rounded-md bg-blue-400 p-2 hover:bg-blue-600 hover:text-white hover:shadow"
                        disabled={notify}
                      >
                        <span
                          className="text-lg uppercase"
                          style={{ fontFamily: "monospace" }}
                        >
                          {notify ? "Notified" : "Notify"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[50vh] flex justify-center items-center text-gray-500">
                  No Projects Added for Aprraisal Process....
                </div>
              )}

              {isEditModalOpen && (
                <AdminUpdateModal
                  closeModal={closeEditModal}
                  project={selectedProject}
                />
              )}
            </>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminEmployeeResponse;
