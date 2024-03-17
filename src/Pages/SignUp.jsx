import React from "react";
import image from "../assets/signup-bg.jpg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";

const SignUp = () => {
  const [validNumber, setValidNumber] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    dateOfJoining: "",
    designation: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setValidNumber(false);
    setValidatePassword(false);
    const { value, name } = e.target;

    setFormInput({ ...formInput, [name]: value });
  };

  const saveDatatoBackend = async (input) => {
    try {
      const res = await Axios.post(
        "http://localhost:8080/employee/saveEmployee",
        input
      );

      if (res.status == 201) {
        toast.success("Data Saved, Please click Login...");
      }
    } catch (error) {
      console.error(error);
      toast.error("something error happens...");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (formInput.phoneNumber.length > 0 &&
        formInput.phoneNumber.length != 10) ||
      formInput.password.length < 8
    ) {
      if (formInput.phoneNumber.length != 10) {
        setValidNumber(true);
      }

      if (formInput.password.length < 8) {
        setValidatePassword(true);
      }

      return;
    }

    console.log(formInput);

    saveDatatoBackend(formInput);
    setFormInput({
      name: "",
      email: "",
      password: "",
      dateOfJoining: "",
      designation: "",
      phoneNumber: "",
    });
  };

  return (
    <div
      style={{ background: `url(${image})` }}
      className="w-full relative flex min-h-screen text-gray-800 flex-col justify-center bg-gray-50 py-1 sm:py-4 bg-cover bg-center"
    >
      <div className="relative sm:max-w-lg mx-auto text-center w-full">
        <span className="text-2xl font-light text-white">
          Register to your account
        </span>
        <form
          className="mt-4 bg-white shadow-md rounded-lg text-left "
          onSubmit={handleSubmit}
        >
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <div className="px-8 py-6 ">
            <label className="block font-semibold"> Name </label>
            <input
              type="text"
              placeholder="name"
              value={formInput.name}
              name="name"
              className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              onChange={handleChange}
              required
            />
            <label className="block mt-3 font-semibold"> Email </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formInput.email}
              className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              onChange={handleChange}
              required
            />
            <label className="block mt-3 font-semibold"> Password </label>
            <input
              type="password"
              value={formInput.password}
              placeholder="Password"
              name="password"
              className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              onChange={handleChange}
              required
            />
            {validatePassword && (
              <p className="text-xs text-red-400">
                password at least 8 characters
              </p>
            )}

            <label className="block mt-3 font-semibold">
              {" "}
              Date of Joining{" "}
            </label>
            <input
              type="date"
              placeholder="joining date"
              value={formInput.dateOfJoining}
              name="dateOfJoining"
              className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md placeholder-opacity-50"
              onChange={handleChange}
              required
            />

            <label className="block mt-3 font-semibold"> Mobile </label>
            <input
              type="number"
              placeholder="mobile"
              value={formInput.phoneNumber}
              name="phoneNumber"
              className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md appearance-none"
              onChange={handleChange}
            />
            {validNumber && (
              <p className="text-xs text-red-400">Invalid mobile number</p>
            )}

            <label className="block mt-3 font-semibold"> Designation </label>
            <input
              type="text"
              placeholder="designation"
              name="designation"
              value={formInput.designation}
              className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md appearance-none"
              onChange={handleChange}
              required
            />

            <div className="flex justify-between items-baseline">
              <button
                type="submit"
                className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
              >
                Register
              </button>
              <a href="/login" className="text-sm hover:underline">
                Already account? LogIn
              </a>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
