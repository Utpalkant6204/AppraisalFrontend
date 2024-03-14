import { useState, useEffect } from "react";

function useUserAvailability() {
  const [available, setAvailable] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const data = sessionStorage.getItem("user") || null;
    if (data !== null) {
      setAvailable(true);
      setAdmin(data.admin);
    }
  }, []);

  return { available, admin };
}

export default useUserAvailability;
