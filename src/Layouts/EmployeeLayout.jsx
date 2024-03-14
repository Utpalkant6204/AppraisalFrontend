import React from "react";
import Employee from "../Components/Header/EmployeeHeader";
import Routing from "../Components/Routing/EmployeeSideRouting";

const EmployeeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Employee />
      <div className="flex flex-row">
        <div className="sm:w-[20%]">
          <Routing />
        </div>
        <main className="sm:w-[80%] w-full flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default EmployeeLayout;
