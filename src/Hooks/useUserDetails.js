import Axios from "axios";
import { useEffect, useState } from "react";

function useUserDetails(isModalOpen) {
  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let timeoutId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = JSON.parse(sessionStorage.getItem("user"));
        const res = await Axios.get(
          `http://localhost:8080/employee/${data.id}/employeeDetails`
        );
        console.log(res.data);
        setProfile(res.data);
        setProjects(res.data.tasks);
      } catch (error) {
        setError(error);
      } finally {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setLoading(false), 300);
      }
    };

    fetchData();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isModalOpen]);

  return { profile, projects, loading, error };
}

export default useUserDetails;
