import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../baseUrl";

const useNotification = (isOpen, clicked) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [save, setSave] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          baseUrl + "/notification/getNotifications"
        );
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [isOpen, clicked]);

  const deteleData = async (data, setClicked) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.delete(
        `${baseUrl}/notification/${data.employeeId}/deleteNotification`
      );
      setClicked(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deteleAll = async (setClicked) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.delete(
        `${baseUrl}/notification/deleteAllNotification`
      );
      setClicked(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const saveNotification = async (input) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${baseUrl}/notification/saveNotification`,
        input
      );
      setSave(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const upDateByAdmin = async (id, input) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(
        `${baseUrl}/notification/${id}/updateNotification`,
        input
      );
      setSave(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    deteleData,
    deteleAll,
    save,
    saveNotification,
    upDateByAdmin,
  };
};

export default useNotification;
