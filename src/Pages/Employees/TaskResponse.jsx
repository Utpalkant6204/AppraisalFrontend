import React from "react";
import EmployeeLayout from "../../Layouts/EmployeeLayout";

const TaskResponse = () => {
  return (
    <EmployeeLayout>
      <div className="flex justify-center items-center h-[88vh] p-4">
        <div className="border rounded-md h-full w-full shadow-lg bg-slate-50">
          No Response
        </div>
      </div>
    </EmployeeLayout>
  );
};

export default TaskResponse;
