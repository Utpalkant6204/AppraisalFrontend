import React from "react";

const EmployeeAddTask = ({ project, openEditModal, handleDelete, notify }) => {
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
  return (
    <div>
      <div className="pt-2 px-2 pb-0 flex justify-between">
        <div className="mb-0 " style={{ fontFamily: "GT Pressura" }}>
          <span className="text-lg">Project Name : </span>
          <span className="ms-1 tex-md">{project.name}</span>
        </div>
        <div className="mb-0 " style={{ fontFamily: "GT Pressura" }}>
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
        <div className="w-[65%]" style={{ fontFamily: "GT Pressura, mono" }}>
          <span className="text-lg">Description : </span>{" "}
          <span className="text-md ms-1">{project.description}</span>
        </div>
        <div className="" style={{ fontFamily: "GT Pressura, mono" }}>
          <span className="text-lg">Duration : </span>{" "}
          <span className="text-md ms-1">
            {`${
              calculateDuration(project.startDate, project.endDate).years > 0
                ? `${
                    calculateDuration(project.startDate, project.endDate).years
                  } years, `
                : ""
            }`}
            {`${
              calculateDuration(project.startDate, project.endDate).months > 0
                ? `${
                    calculateDuration(project.startDate, project.endDate).months
                  } months, `
                : ""
            }`}
            {`${
              calculateDuration(project.startDate, project.endDate).days
            } days`}
          </span>
        </div>
      </div>
      {!notify && (
        <div className="flex justify-center pb-2">
          <button
            onClick={() => openEditModal(project)}
            className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-4 border border-green-500 hover:border-transparent rounded"
          >
            Edit
          </button>
          <button
            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded mx-4"
            onClick={() => handleDelete(project.id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeAddTask;
