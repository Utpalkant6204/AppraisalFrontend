import Axios from "axios";
import { useState } from "react";

function useSearch() {
  const [profileSearch, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let timeoutId;

  const fetch = async (s) => {
    try {
      setLoading(true);
      const res = await Axios.get(
        `http://localhost:8080/admin/search?name=` + s
      );

      setProfile(res.data);
    } catch (error) {
      setError(error);
    } finally {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setLoading(false), 300);
    }
  };

  timeoutId = setTimeout(() => {
    setLoading(false);
  }, 800);

  return { loading, error, profileSearch, fetch };
}

export default useSearch;
