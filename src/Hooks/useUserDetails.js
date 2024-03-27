import { useEffect, useState } from "react";
import { appAxios } from "../baseUrl";

function useUserDetails(isModalOpen, isEditModalOpen, deleteTask, save) {
  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);
  const [attribute, setAttribute] = useState({});
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let timeoutId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = JSON.parse(sessionStorage.getItem("user"));
        const res = await appAxios.get(`/employee/${data.id}/employeeDetails`);
        setProfile(res.data);
        setProjects(res.data.tasks);
        setNotify(res.data.notifybyemployee);
        setAttribute(res.data.attributes);
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
  }, [isModalOpen, isEditModalOpen, deleteTask, save]);

  return { profile, projects, loading, error, notify, attribute };
}

export default useUserDetails;
