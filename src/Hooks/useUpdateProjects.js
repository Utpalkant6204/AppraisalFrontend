import  Axios  from "axios";
import { useState } from "react";

function useUpdateProjects() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleSubmit = async (formData, closeModalCallback, id) => {
    console.log(id);
    try {
      setLoading(true);
      const response = await Axios.put(
        `http://localhost:8080/task/${id}/updateTask`,
        formData
      );
      setData(response.data);
      closeModalCallback();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, handleSubmit };
}

export default useUpdateProjects;
