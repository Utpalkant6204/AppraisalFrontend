import { Route, Routes } from "react-router-dom";
import EmployeeHome from "./Pages/Employees/EmployeeHome";
import Home from "./Pages/Home";
import About from "./Pages/Employees/About";
import NotFound from "./Pages/NotFound";
import AdminHome from "./Pages/Admin/AdminHome";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { useEffect, useState } from "react";
import Tasks from "./Pages/Employees/Tasks";
import TaskResponse from "./Pages/Employees/TaskResponse";

function App() {
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);

  const check = () => {
    const session = JSON.parse(sessionStorage.getItem("user")) || null;
    setLogin(false);
    if (session) {
      setLogin(true);
      setAdmin(session.admin);
    }
  };
  useEffect(() => {
    check();
  }, []);

  console.log(login, admin);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {!login && (
        <Route path="/">
          {/* <Route index element={<Home />} /> */}
          <Route
            path="login"
            element={<Login login={setLogin} admin={setAdmin} />}
          />
          <Route path="signup" element={<SignUp />} />
        </Route>
      )}

      {login && !admin && (
        // <Route path="/employee">
        //   <Route index element={<EmployeeHome />} />
        //   <Route path="about" element={<About />} />
        // </Route>
        <>
          <Route path="/employee-home" element={<EmployeeHome />} />
          <Route path="/employee-about" element={<About />} />
          <Route path="/employee-addTask" element={<Tasks />} />
          <Route path="/employee-taskResponse" element={<TaskResponse />} />
        </>
      )}

      {login && admin && (
        <Route path="/admin-home">
          <Route index element={<AdminHome />} />
        </Route>
      )}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
