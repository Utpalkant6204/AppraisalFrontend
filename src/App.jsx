import { Route, Routes, useNavigate } from "react-router-dom";
import EmployeeHome from "./Pages/Employees/EmployeeHome";
import Home from "./Pages/Home";
import About from "./Pages/Employees/About";
import NotFound from "./Pages/NotFound";
import AdminHome from "./Pages/Admin/AdminHome";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Tasks from "./Pages/Employees/Tasks";
import TaskResponse from "./Pages/Employees/TaskResponse";
import AdminAbout from "./Pages/Admin/AdminProfile";
import AdminEmployees from "./Pages/Admin/AdminEmployees";
import AdminEmployeeResponse from "./Pages/Admin/AdminEmployeeResponse";
import ProtectedAdmin from "./Routes/ProtectedRoutesAdmin";
import ProtectedRoutes from "./Routes/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/employee-home"
        element={<ProtectedRoutes Component={EmployeeHome} />}
      />
      <Route
        path="/employee-about"
        element={<ProtectedRoutes Component={About} />}
      />
      <Route
        path="/employee-addTask"
        element={<ProtectedRoutes Component={Tasks} />}
      />
      <Route
        path="/employee-taskResponse"
        element={<ProtectedRoutes Component={TaskResponse} />}
      />
      <Route
        path="/admin-home"
        element={<ProtectedAdmin Component={AdminHome} />}
      />
      <Route
        path="/admin-about"
        element={<ProtectedAdmin Component={AdminAbout} />}
      />
      <Route
        path="/admin-employees"
        element={<ProtectedAdmin Component={AdminEmployees} />}
      />
      <Route
        path="/admin-employees/:id/:name"
        element={<ProtectedAdmin Component={AdminEmployeeResponse} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
