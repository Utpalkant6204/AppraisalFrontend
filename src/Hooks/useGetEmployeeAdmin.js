import { useState } from "react";
import Axios from "axios";

function useGetEmployeeAdmin() {
  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);
  const [notifyByEmployee, setNotify] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (id) => {
    try {
      setLoading(true);
      const res = await Axios.get(
        `http://localhost:8080/employee/${id}/employeeDetails`
      );
      setProfile(res.data);
      setProjects(res.data.tasks);
      setNotify(res.data.notifybyemployee);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { profile, projects, loading, error, notifyByEmployee, fetchData };
}

export default useGetEmployeeAdmin;