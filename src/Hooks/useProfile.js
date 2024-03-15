import Axios from "axios";
import { useEffect, useState } from "react";

function useProfile() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let timeoutId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = JSON.parse(sessionStorage.getItem("user"));
        const res = await Axios.get(
          `http://localhost:8080/employee/${data.id}/getEmployee`
        );
        setProfile(res.data);
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
  }, []);

  return { profile, loading, error };
}

export default useProfile;
