import { useState, useEffect } from "react";

function useUserAvailability() {
  const [available, setAvailable] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("user")) || null;
    if (data !== null) {
      setAvailable(true);
      // setId(data.id);
      setAdmin(data.admin);
    }
  }, []);

  return { available, admin };
}

export default useUserAvailability;
