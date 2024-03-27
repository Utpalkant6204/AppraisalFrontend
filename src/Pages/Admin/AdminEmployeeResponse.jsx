import React, { useEffect, useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import Loader from "../../Components/Loader/Loader";
import useGetEmployeeAdmin from "../../Hooks/useGetEmployeeAdmin";
import { useParams } from "react-router-dom";
import AdminAssignRatingModal from "../../Components/modal/AdminAssignRatingModal";
import useNotification from "../../Hooks/useNotification";
import AdminResponseTable from "../../Components/Tables/AdminResponseTable";
import AttributesModal from "../../Components/modal/AttributesModel";
import RatingGrid from "../../Components/Tables/RatingGrid";

const AdminEmployeeResponse = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAttributeModalOpen, setAttributeModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [input, setInput] = useState("");
  const {
    fetchData,
    profile,
    projects,
    loading,
    error,
    notifyByEmployee,
    attribute,
  } = useGetEmployeeAdmin();

  const { upDateByAdmin, save } = useNotification();
  const { id, name } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [isEditModalOpen, save, isAttributeModalOpen]);

  const edit = () => {
    setAttributeModal(true);
  };

  const close = () => {
    setAttributeModal(false);
  };

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

  const HandleChange = (e) => {
    setInput(e.target.value);
  };

  const filteredProfiles = projects.filter((project) =>
    project.name.toLowerCase().includes(input.toLowerCase())
  );

  const hasRatings = Object.values(attribute).some((value) => value > 0);

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
                {profile.noifybyadmin ? (
                  <div className="ps-4 flex items-center">
                    <p
                      className="italic me-4 text-green-800 underline mx-4"
                      style={{ fontFamily: "cursive" }}
                    >
                      No longer Able to update ratings, already notify for
                      appraisable...
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    {notifyByEmployee && (
                      <div className="ps-14">
                        <button
                          className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-black font-mono transition duration-300 ease-out border-2 border-green-500 hover:shadow-md "
                          onClick={edit}
                        >
                          Rate Their Attributes
                        </button>
                      </div>
                    )}
                    <div className="ml-5 flex w-[35%] items-center justify-between">
                      <input
                        type="search"
                        className="m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-400 dark:focus:border-primary"
                        placeholder="Search project by name...."
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        value={input}
                        onChange={HandleChange}
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
                )}
              </div>

              {notifyByEmployee ? (
                <div className="ps-20">
                  <div className="text-2xl underline text-green-900 font-sans">
                    Projects
                  </div>
                  <div className="pe-4 pt-8">
                    {filteredProfiles.map((project, index) => (
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
                    {hasRatings ? (
                      <RatingGrid attribute={attribute} />
                    ) : (
                      <div>No attribute rating Assigned yet....</div>
                    )}
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
              {isAttributeModalOpen && (
                <AttributesModal
                  closeModal={close}
                  attribute={attribute}
                  id={profile.id}
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
