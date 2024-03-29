import { Route, Routes } from "react-router-dom";
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
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  // const [login, setLogin] = useState(false);
  // const [admin, setAdmin] = useState(false);
  // const navigate = useNavigate();

  // const check = () => {
  //   const session = JSON.parse(sessionStorage.getItem("user")) || null;
  //   setLogin(false);
  //   if (session) {
  //     setLogin(true);
  //     setAdmin(session.admin);
  //   }
  // };

  // useEffect(() => {
  //   check();
  // }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* {!login && (
        <Route path="/">
          
          <Route
            path="login"
            element={<Login login={setLogin} admin={setAdmin} />}
          />
          <Route path="signup" element={<SignUp />} />
        </Route>
      )} */}

      {/* {login && !admin && (
        <>
          <Route path="/employee-home" element={<EmployeeHome />} />
          <Route path="/employee-about" element={<About />} />
          <Route path="/employee-addTask" element={<Tasks />} />
          <Route path="/employee-taskResponse" element={<TaskResponse />} />
        </>
      )} */}
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
        element={<ProtectedRoutes Component={AdminHome} />}
      />
      <Route
        path="/admin-about"
        element={<ProtectedRoutes Component={AdminAbout} />}
      />
      <Route
        path="/admin-employees"
        element={<ProtectedRoutes Component={AdminEmployees} />}
      />
      <Route
        path="/admin-employees/:id/:name"
        element={<ProtectedRoutes Component={AdminEmployeeResponse} />}
      />

      {/* {login && admin && (
        <>
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin-about" element={<AdminAbout />} />
          <Route path="/admin-employees" element={<AdminEmployees />} />
          <Route
            path="/admin-employees/:id/:name"
            element={<AdminEmployeeResponse />}
          />
        </>
      )} */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
