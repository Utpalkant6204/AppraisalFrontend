import React, { useEffect, useState } from "react";
import useUpdatePassword from "../../Hooks/useUpdatePassword";

const PasswordChangeModal = ({ closeModal, email }) => {
  const { passowrdChange, error, show } = useUpdatePassword();
  const [input, setInput] = useState({
    email: email || "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errormsg, setErrormsg] = useState("");
  const [inputError, setInputError] = useState(false);
  const [validatePassword, setValidatePassowrd] = useState(false);

  const handelChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
    setInputError(false);
    setValidatePassowrd(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.newPassword.length < 8) {
      setInputError(true);
      return;
    }

    if (input.newPassword != input.confirmPassword) {
      setValidatePassowrd(true);
      return;
    }
    await passowrdChange(input, closeModal, setErrormsg);
    setInput({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg p-8">
          <button className="absolute top-0 right-0 p-4" onClick={closeModal}>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="mb-5 font-mono uppercase text-blue-700 text-lg">
            Change Passowrd
          </div>

          {show && <p className="text-sm text-green-700">{errormsg}</p>}

          {inputError && (
            <p className="text-red-500 text-sm">
              New Passowrd must have atleast 8 character...
            </p>
          )}
          {validatePassword && (
            <p className="text-red-500 text-sm">
              New Password and ConfirmPassword must be same.....
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-00 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="email"
                  required
                  placeholder="project name...."
                  name="email"
                  value={input.email}
                  disabled
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name1"
                >
                  Old Password
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-00 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name1"
                  type="password"
                  required
                  placeholder="password"
                  name="oldPassword"
                  value={input.oldPassword}
                  onChange={handelChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name2"
                >
                  New Password
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-00 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name2"
                  type="password"
                  required
                  placeholder="new password"
                  name="newPassword"
                  value={input.newPassword}
                  onChange={handelChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name3"
                >
                  Confirm Password
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-00 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name3"
                  type="password"
                  required
                  placeholder="confirm new password"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={handelChange}
                />
              </div>
            </div>
            <div className="flex justify-end items-center">
              {error && <p className="text-sm text-red-500 mx-3">{errormsg}</p>}
              <button
                type="submit"
                className="bg-blue-500 text-white px-5 py-2 hover:bg-blue-600"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordChangeModal;
