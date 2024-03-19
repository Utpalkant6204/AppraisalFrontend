import React, { useState } from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import useGetAllEmployees from "../../Hooks/useGetAllEmployees";
import ProfileCard from "../../Components/Cards/ProfileCard";
import Loader from "../../Components/Loader/Loader";

const AdminEmployees = () => {
  const { profiles, loading, error } = useGetAllEmployees();
  const [input, setInput] = useState('');
  
  const filterprofiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(input.toLowerCase())
  );
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
              <div className="flex justify-between p-10">
                <div
                  className=" pb-5 text-red-500"
                  style={{ fontFamily: "cursive" }}
                >
                  <span className="me-2">👉</span>
                  <span className="underline hover:text-lime-600">
                    List of Employees, Select those you want to give ratings....
                  </span>
                </div>
                <div className="ml-5 flex w-[35%] items-center justify-between">
                  <input
                    type="search"
                    className="m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-400 dark:focus:border-primary"
                    placeholder="Search Employee by name...."
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
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

              {filterprofiles.length > 0 ? filterprofiles
                .filter(
                  (profile) => profile.designation.toLowerCase() !== "admin"
                )
                .reduce((rows, profile, index) => {
                  if (index % 3 === 0) rows.push([]);
                  rows[rows.length - 1].push(profile);
                  return rows;
                }, [])
                .map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-between m-5">
                    {row.map((profile) => (
                      <div key={profile.id} className="flex-1 me-4">
                        <ProfileCard profile={profile} />
                      </div>
                    ))}
                  </div>
                )):<div className="flex justify-center font-bold items-center min-h-[50vh]">No Data Available....</div>}
            </>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminEmployees;
