import { useState } from "react";
import Axios from "axios";

const useSaveProjects = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleSubmit = async (formData, closeModalCallback) => {
    try {
      setLoading(true);
      const data = JSON.parse(sessionStorage.getItem("user"));
      const response = await Axios.post(
        `http://localhost:8080/task/employee/${data.id}/saveTask`,
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
};

export default useSaveProjects;