import { useEffect, useState } from "react";
import {appAxios} from '../baseUrl'

function useProfile() {
  const [profiles, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let timeoutId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await appAxios.get(`/admin/getEmployees`);
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

  return { profiles, loading, error };
}

export default useProfile;
