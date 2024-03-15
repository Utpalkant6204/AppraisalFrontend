import React from "react";
import EmployeeLayout from "../../Layouts/EmployeeLayout";

const Tasks = () => {
  return (
    <EmployeeLayout>
      <div className="flex justify-center items-center h-[88vh] p-4">
        <div className="border rounded-md h-full w-full shadow-lg bg-slate-50">
          Tasks
        </div>
      </div>
    </EmployeeLayout>
  );
};

export default Tasks;
