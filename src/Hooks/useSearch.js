import Axios from "axios";
import { useState } from "react";
import baseUrl from "../baseUrl";

function useSearch() {
  const [profileSearch, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorLoad, setError] = useState(null);
  let timeoutId;

  const fetch = async (s) => {
    try {
      setLoading(true);
      const res = await Axios.get(`${baseUrl}/admin/search?name=` + s);

      setProfile(res.data);
    } catch (error) {
      setError(error);
    } finally {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setLoading(false), 300);
    }
  };

  return { loading, errorLoad, profileSearch, fetch };
}

export default useSearch;
