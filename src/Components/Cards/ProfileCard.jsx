import React from "react";
import { NavLink } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";

const ProfileCard = ({ profile }) => {
  console.log(profile);
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const convertTenure = (months) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return { years, months: remainingMonths };
  };

  const tenure = convertTenure(profile.tenure);

  return (
    <div className="">
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="https://i.ibb.co/0GGmSfY/50994.jpg"
              alt="John Doe"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {profile.name}
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>{profile.designation}</p>
            </div>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-1 py-2 text-gray-500 font-semibold">
                    Joining Date
                  </td>
                  <td className="px-2 py-2">{`${formatDate(
                    profile.dateOfJoining
                  )}`}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Tenure
                  </td>
                  <td className="px-2 py-2">
                    {tenure.years > 0 && <span>{tenure.years} years </span>}
                    {tenure.months} months
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="px-2 py-2">{profile.phoneNumber}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">{profile.email}</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center my-3 flex justify-center">
              <NavLink
                to={`/admin-employees/${profile.id}/${profile.name}`}
                className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
              >
                Assign Ratings
              </NavLink>
              {profile.noifybyadmin && (
                <CiCircleCheck size={16} className="text-green-900 mx-4" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
