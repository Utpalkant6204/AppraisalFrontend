import React from "react";
import Header from "./Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
