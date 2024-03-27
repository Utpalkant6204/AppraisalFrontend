import { useState } from "react";
import { appAxios } from "../baseUrl";

function useAttributes() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const saveRatings = async (input, id, closeModal) => {
    setLoading(true);
    setError(null);
    try {
      const res = await appAxios.post(`/admin/${id}/saveAttribute`, input);
      closeModal();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, saveRatings };
}

export default useAttributes;
