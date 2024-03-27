import React, { useEffect, useState } from "react";
import EmployeeLayout from "../../Layouts/EmployeeLayout";
import useUserDetails from "../../Hooks/useUserDetails";
import Loader from "../../Components/Loader/Loader";
import Table from "../../Components/Tables/employeeTable";
import RatingGrid from "../../Components/Tables/RatingGrid";

const TaskResponse = () => {
  const { profile, projects, loading, error, attribute } = useUserDetails();
  const [averageRating, setAverageRating] = useState(0);
  const [bonusPercentage, setBonusPercentage] = useState(0);

  useEffect(() => {
    if (projects.length === 0) return;

    let totalRating = 0;
    let totalProjects = 0;

    projects.forEach((project) => {
      if (project.rating) {
        totalRating += project.rating;
        totalProjects++;
      }
    });

    const average = totalRating / totalProjects;
    setAverageRating(average);
    let bonus = 0;
    if (average >= 0 && average <= 2) {
      bonus = 10;
    } else if (average >= 3 && average <= 4) {
      bonus = 20;
    } else if (average >= 5 && average <= 6) {
      bonus = 30;
    } else if (average >= 7 && average <= 8) {
      bonus = 40;
    } else if (average >= 9 && average <= 10) {
      bonus = 50;
    }
    setBonusPercentage(bonus);
  }, [projects]);

  const hasRatings = Object.values(attribute).some((value) => value > 0);

  return (
    <EmployeeLayout>
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
              <div
                className="p-10 pb-5 text-red-500"
                style={{ fontFamily: "cursive" }}
              >
                <span className="me-2">👉</span>
                <span className="underline hover:text-lime-600">
                  Rating Assigned by Admin for Appraisal......
                </span>
              </div>
              {profile.noifybyadmin ? (
                <div className="ps-20">
                  <div className="flex items-center">
                    <div className="text-2xl underline text-green-900 font-sans">
                      Projects
                    </div>
                    <div className="ms-14 text-xl text-red-800 underline">
                      Average Ratings : {averageRating}
                    </div>
                    <div className="ms-14 text-md text-blue-800">
                      Congratulation!!, you get Appraisal : {bonusPercentage} %
                    </div>
                  </div>
                  <div className="pe-4 pt-8">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="border p-2 shadow rounded-lg bg-white mb-10"
                      >
                        <Table project={project} />
                      </div>
                    ))}
                    {hasRatings ? <RatingGrid attribute={attribute} /> : <></>}
                  </div>
                </div>
              ) : (
                <div className="h-[50vh] flex justify-center items-center text-gray-500">
                  No Response ......
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </EmployeeLayout>
  );
};

export default TaskResponse;
