import Axios from "axios";
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
        `http://localhost:8080/employee/${id}/updateTask`,
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

  const handledelete = async (id, setSeleteDelete) => {
    try {
      setLoading(true);
      const response = await Axios.delete(
        `http://localhost:8080/employee/${id}/deleteTask`
      );
      setSeleteDelete(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, handleSubmit, handledelete };
}

export default useUpdateProjects;
