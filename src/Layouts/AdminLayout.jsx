import React from "react";
import Admin from "../Components/Header/AdminHeader";
import Routing from "../Components/Routing/AdminSideRouting";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Admin />
      <div className="flex flex-row">
        <div className="sm:w-[20%]">
          <Routing />
        </div>
        <main className="sm:w-[80%] w-full flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
