import React from "react";
import useProfile from "../../Hooks/useProfile";
import EMPLayout from "../../Layouts/EmployeeLayout";
import Loader from "../../Components/Loader/Loader";

const About = () => {
  const { profile, loading, error } = useProfile();

  const convertTenure = (months) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return { years, months: remainingMonths };
  };

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const formattedDate = formatDate(profile.dateOfJoining);
  const tenure = convertTenure(profile.tenure);

  return (
    <EMPLayout>
      <div className="flex justify-center items-center h-[88vh] p-4">
        <div className="border rounded-md h-full w-full shadow-lg bg-slate-50">
          {loading && <Loader />}
          {error && (
            <div className="flex justify-center items-center h-full w-full">
              <div>Something Went Wrong...</div>
            </div>
          )}
          {!loading && (
            <div class="container mx-auto my-5 p-5">
              <div class="md:flex no-wrap md:-mx-2 ">
                <div class="w-full md:w-3/12 md:mx-2">
                  <div class="bg-white p-3 border-t-4 border-green-400">
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                      {profile.name}
                    </h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">
                      {profile.designation}
                    </h3>

                    <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                      <li class="flex items-center py-3">
                        <span>Status</span>
                        <span class="ml-auto">
                          <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                            Active
                          </span>
                        </span>
                      </li>
                      <li class="flex items-center py-3">
                        <span>Employee since</span>
                        <span class="ml-auto">{formattedDate}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="w-full md:w-9/12 mx-2 h-full">
                  <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                      <span clas="text-green-500">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700 p-4">
                      <div class="flex">
                        <div class="px-4 py-1 font-semibold">Name</div>
                        <div class="px-4 py-1">{profile.name}</div>
                      </div>
                      <div class="flex">
                        <div class="px-4 py-1 font-semibold">Designation</div>
                        <div class="px-4 py-1">{profile.designation}</div>
                      </div>

                      <div class="flex">
                        <div class="px-4 py-1 font-semibold">Joining Date</div>
                        <div class="px-4 py-1">{formattedDate}</div>
                      </div>

                      <div class="flex">
                        <div class="px-4 py-1 font-semibold">Mobile</div>
                        <div class="px-4 py-1">{profile.phoneNumber}</div>
                      </div>

                      <div class="flex">
                        <div class="px-4 py-1 font-semibold">Tenure</div>
                        <div class="px-4 py-1">
                          {tenure.years} years {tenure.months} months
                        </div>
                      </div>

                      <div class="flex">
                        <div class="px-4 py-1 font-semibold">Email</div>
                        <div class="px-4 py-1 text-blue-500 cursor-pointer underline">
                          {profile.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </EMPLayout>
  );
};

export default About;
