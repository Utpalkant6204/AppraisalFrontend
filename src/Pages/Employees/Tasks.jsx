import React, { useState } from "react";
import EmployeeLayout from "../../Layouts/EmployeeLayout";
import { VscAdd } from "react-icons/vsc";
import Loader from "../../Components/Loader/Loader";
import useUserDetails from "../../Hooks/useUserDetails";
import Modal from "../../Components/modal/AddProjectModal";
import EditProjectModal from "../../Components/modal/EditProjectModal";
import useNotification from "../../Hooks/useNotification";
import EmployeeAddTask from "../../Components/Tables/EmployeeAddTask";
import useHandleProjects from "../../Hooks/useHandleProjects";

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [deleteTask, setSeleteDelete] = useState(false);
  const { handledeleteProject } = useHandleProjects();
  const { saveNotification, save } = useNotification();
  const { profile, projects, loading, error, notify } = useUserDetails(
    isModalOpen,
    isEditModalOpen,
    deleteTask,
    save
  );

  const handleNotify = () => {
    const inputs = {
      employeeId: profile.id,
      employeeName: profile.name,
    };
    saveNotification(inputs);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openEditModal = (project) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProject(null);
  };

  const handleDelete = (id) => {
    handledeleteProject(id, setSeleteDelete);
  };

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
              {profile.tenure >= 12 ? (
                <>
                  {!notify ? (
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
                  ) : (
                    <div className="ps-16 flex items-center">
                      <p
                        className="italic me-4 text-green-800 underline mx-4"
                        style={{ fontFamily: "cursive" }}
                      >
                        No longer Able to add new projects, already notify for
                        appraisable...
                      </p>
                    </div>
                  )}
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
                          <EmployeeAddTask
                            project={project}
                            openEditModal={openEditModal}
                            handleDelete={handleDelete}
                            notify={notify}
                          />
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
                          onClick={handleNotify}
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
                  )}
                  {isModalOpen && <Modal closeModal={closeModal} />}
                  {isEditModalOpen && (
                    <EditProjectModal
                      closeModal={closeEditModal}
                      project={selectedProject}
                    />
                  )}
                </>
              ) : (
                <>
                  <div
                    className="h-[50vh] w-full flex justify-center items-center cursive text-md"
                    style={{ fontFamily: "cursive" }}
                  >
                    Not Eligible for appraisal.......
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </EmployeeLayout>
  );
};

export default Tasks;
