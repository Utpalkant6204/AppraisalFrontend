import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import Loader from "../../Components/Loader/Loader";
import useGetEmployeeAdmin from "../../Hooks/useGetEmployeeAdmin";
import { useParams } from "react-router-dom";
import AdminAssignRatingModal from "../../Components/modal/AdminAssignRatingModal";
import useNotification from "../../Hooks/useNotification";
import AdminResponseTable from "../../Components/Tables/AdminResponseTable";

const AdminEmployeeResponse = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const {
    fetchData,
    profile,
    projects,
    loading,
    error,
    notifyByEmployee,
  } = useGetEmployeeAdmin();

  const { upDateByAdmin, save } = useNotification();

  const { id, name } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [isEditModalOpen, save]);

  const openEditModal = (project) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProject(null);
  };

  const handleNotify = () => {
    const inputData = {
      noifybyadmin: true,
    };
    upDateByAdmin(id, inputData);
  };

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
              <div className="flex-row justify-between p-10">
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
                {profile.noifybyadmin && (
                  <div className="ps-4 flex items-center">
                    <p
                      className="italic me-4 text-green-800 underline mx-4"
                      style={{ fontFamily: "cursive" }}
                    >
                      No longer Able to update ratings, already notify for
                      appraisable...
                    </p>
                  </div>
                )}
              </div>

              {notifyByEmployee ? (
                <div className="ps-20">
                  <div className="text-2xl underline text-green-900 font-sans">
                    Projects
                  </div>
                  <div className="pe-4 pt-8">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="border p-2 shadow rounded-lg bg-white mb-10"
                      >
                        <AdminResponseTable
                          project={project}
                          openEditModal={openEditModal}
                          notify={profile.noifybyadmin}
                        />
                      </div>
                    ))}
                    <div className="ps-16 pb-5 flex justify-end items-center">
                      {!profile.noifybyadmin && (
                        <p
                          className="italic me-4 text-red-800 underline"
                          style={{ fontFamily: "cursive" }}
                        >
                          After Notify, you will not be able to update any
                          ratings{" "}
                        </p>
                      )}
                      <button
                        className="flex items-center border rounded-md bg-blue-400 p-2 hover:bg-blue-600 hover:text-white hover:shadow"
                        disabled={profile.noifybyadmin}
                        onClick={handleNotify}
                      >
                        <span
                          className="text-lg uppercase"
                          style={{ fontFamily: "monospace" }}
                        >
                          {profile.noifybyadmin ? "Notified" : "Notify"}
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
                <AdminAssignRatingModal
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
