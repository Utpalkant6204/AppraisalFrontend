import React from "react";
import useProfile from "../../Hooks/useProfile";
import Loader from "../../Components/Loader/Loader";
import AdminLayout from "../../Layouts/AdminLayout";
import AboutCard from "../../Components/Cards/AboutCard";

const AdminAbout = () => {
  const { profile, loading, error } = useProfile();

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const formattedDate = formatDate(profile.dateOfJoining);

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
            <div className="container mx-auto my-5 p-5">
              <div className="md:flex no-wrap md:-mx-2 ">
                <div className="w-full md:w-3/12 md:mx-2">
                  <div className="bg-white p-3 border-t-4 border-green-400">
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                      {profile.name}
                    </h1>
                    <h3 className="text-gray-600 font-lg text-semibold leading-6">
                      {profile.designation}
                    </h3>

                    <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                      <li className="flex items-center py-3">
                        <span>Status</span>
                        <span className="ml-auto">
                          <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                            Active
                          </span>
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span>Employee since</span>
                        <span className="ml-auto">{formattedDate}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <AboutCard profile={profile} />
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAbout;
