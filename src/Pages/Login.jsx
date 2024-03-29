import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigation = useNavigate();

  const checkValidation = async (input) => {
    try {
      const res = await Axios.post("http://localhost:8080/login", input);
      if (res.data.status == 302) {
        sessionStorage.setItem("user", JSON.stringify(res.data));
        if (res.data.admin == true) {
          navigation("/admin-home", { replace: true });
        }
        if (res.data.admin == false) {
          navigation("/employee-home", { replace: true });
        }
      }
    } catch (error) {
      console.error(error);
      error.response.data
        ? toast.error(error.response.data.message, { position: "top-center" })
        : toast.error("Bad Credentials", { position: "top-center" });
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    //console.log(email, password);

    if (password.length < 8) {
      setError(true);
      return;
    }

    const input = {
      email: email,
      password: password,
    };

    //console.log(input);

    checkValidation(input);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-blue-400 h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
          style={{ height: "500px" }}
        >
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">Log In</h1>
              <div className="w-full mt-4">
                <form
                  className="form-horizontal w-3/4 mx-auto"
                  onSubmit={HandleSubmit}
                >
                  <div className="flex flex-col mt-4">
                    <label
                      htmlFor="helper-text"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="helper-text"
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-white-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <label
                      htmlFor="pass"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="pass"
                      aria-describedby="helper-text-explanation"
                      className={`bg-gray-50 border ${
                        error ? "border-red-500" : "border-gray-300"
                      } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder=""
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError(false);
                      }}
                      required
                    />

                    {error && (
                      <p className="text-xs mt-1 text-red-500">
                        Passowrd atleast have 8 character
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col mt-8">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <a
                    className="no-underline hover:underline text-blue-dark text-xs"
                    href="/signup"
                  >
                    Don't have Account ? SignIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block md:w-1/2 rounded-r-lg"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
