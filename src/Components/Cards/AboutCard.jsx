import React from "react";

const AboutCard = ({ profile }) => {
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
    <div className="w-full md:w-9/12 mx-2 h-full">
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span clas="text-green-500">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700 p-4">
          <div className="flex">
            <div className="px-4 py-1 font-semibold">Name</div>
            <div className="px-4 py-1">{profile.name}</div>
          </div>
          <div className="flex">
            <div className="px-4 py-1 font-semibold">Designation</div>
            <div className="px-4 py-1">{profile.designation}</div>
          </div>

          <div className="flex">
            <div className="px-4 py-1 font-semibold">Joining Date</div>
            <div className="px-4 py-1">{formattedDate}</div>
          </div>

          <div className="flex">
            <div className="px-4 py-1 font-semibold">Mobile</div>
            <div className="px-4 py-1">{profile.phoneNumber}</div>
          </div>

          <div className="flex">
            <div className="px-4 py-1 font-semibold">Tenure</div>
            <div className="px-4 py-1">
              {tenure.years} years {tenure.months} months
            </div>
          </div>

          <div className="flex">
            <div className="px-4 py-1 font-semibold">Email</div>
            <div className="px-4 py-1 text-blue-500 cursor-pointer underline">
              {profile.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
