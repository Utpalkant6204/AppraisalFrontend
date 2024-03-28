import { useState } from "react";
import { appAxios } from "../baseUrl";

const useHandleProjects = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleSubmit = async (formData, closeModalCallback) => {
    try {
      setLoading(true);
      const data = JSON.parse(sessionStorage.getItem("user"));
      const response = await appAxios.post(
        `/employee/${data.id}/saveTask`,
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

  const handleUpdateProject = async (formData, closeModalCallback, id) => {
    try {
      setLoading(true);
      const response = await appAxios.put(
        `/employee/${id}/updateTask`,
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

  const handledeleteProject = async (id, setSeleteDelete) => {
    try {
      setLoading(true);
      const response = await appAxios.delete(`/employee/${id}/deleteTask`);
      setSeleteDelete(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    handleSubmit,
    handleUpdateProject,
    handledeleteProject,
  };
};

export default useHandleProjects;
