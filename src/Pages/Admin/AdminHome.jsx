import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import useProfile from "../../Hooks/useProfile";
import Loader from "../../Components/Loader/Loader";
import { IoIosArrowRoundForward } from "react-icons/io";
import "../Animation.css";

const AdminHome = () => {
  const { profile, loading, error } = useProfile();
  return (
    <AdminLayout>
      <div className="flex justify-center items-center h-[88vh] p-4">
        <div className="border rounded-md h-full w-full shadow-lg bg-slate-50">
          {loading && <Loader />}
          {error && (
            <div className="flex justify-center items-center h-full w-full">
              <div>Something Went Wrong...</div>
            </div>
          )}
          {!loading && (
            <div className="m-10 ">
              <div className=" pt-16">
                {" "}
                <span
                  className="text-7xl uppercase ps-10 text-fuchsia-500 tracking-wider font-bold"
                  style={{ fontFamily: "GT Pressura" }}
                >
                  Welcome{" "}
                </span>
                <span
                  className="ms-10 text-4xl text-neutral-500 border-b-2 border-indigo-500 pb-1 relative animate-pulse"
                  style={{ fontFamily: "monospace" }}
                >
                  <span className="opacity-100">{profile.name}</span>
                </span>
              </div>
              <div className="pt-6 ps-10 text-3xl text-neutral-500 tracking-wider uppercase">
                Designation :{" "}
                <span className="italic">{profile.designation}</span>
              </div>

              <p
                className="pt-6 ps-10 text-xl flex"
                style={{ fontFamily: "monospace" }}
              >
                Start your Appraisal Process{" "}
                <span className="ms-3">
                  <a
                    className="underline hover:text-green-500 cursor-pointer text-blue-500 flex"
                    href="/admin-employees"
                  >
                    here
                    <span className=" ms-2 animate-bounce-custom">
                      <IoIosArrowRoundForward size={27} />
                    </span>
                  </a>
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminHome;
