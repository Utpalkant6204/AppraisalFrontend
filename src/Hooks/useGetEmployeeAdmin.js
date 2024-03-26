import { useState } from "react";
import Axios from "axios";
import baseUrl from "../baseUrl";

function useGetEmployeeAdmin() {
  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);
  const [notifyByEmployee, setNotify] = useState(false);
  const [attribute, setAttribute] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (id) => {
    try {
      setLoading(true);
      const res = await Axios.get(baseUrl + `/employee/${id}/employeeDetails`);
      setProfile(res.data);
      setProjects(res.data.tasks);
      setNotify(res.data.notifybyemployee);
      setAttribute(!res.data.attribute ? {} : res.data.attribute);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    profile,
    projects,
    loading,
    error,
    notifyByEmployee,
    fetchData,
    attribute,
  };
}

export default useGetEmployeeAdmin;
