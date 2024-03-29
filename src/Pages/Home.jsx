import React from "react";
import Layout from "../Layout";
import { IoIosArrowRoundForward } from "react-icons/io";
import useUserAvailability from "../Hooks/useUserAvailability";

const Home = () => {
  const { available, admin } = useUserAvailability();
  console.log(admin, "from");

  function checkbox() {
    if (available && admin) {
      return "/admin-home";
    } else if (available) {
      return "/employee-home";
    } else {
      return "/login";
    }
  }

  return (
    <Layout>
      <div className=" pt-14">
        <div
          className="mt-16 ms-20 text-7xl mb-5 text-green-400"
          style={{ fontFamily: "monospace" }}
        >
          Appraisal Case Study
        </div>
        <div
          className="text-white ms-20 p-0 mt-5 text-5xl tracking-widest"
          style={{ fontFamily: "GT Pressura" }}
        >
          Join for the appraisal process
        </div>

        <div className="ms-24 mt-8">
          <a
            href={checkbox()}
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              <div className="flex">
                <div className="me-3"> Get Appraisal</div>{" "}
                <div>
                  <IoIosArrowRoundForward size={25} />
                </div>
              </div>
            </span>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
