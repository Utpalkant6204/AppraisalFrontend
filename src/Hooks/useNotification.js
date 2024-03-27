import { useEffect, useState } from "react";
import axios from "axios";
import {appAxios} from "../baseUrl";

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
        const response = await appAxios.get(
           "/notification/getNotifications"
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
      const response = await appAxios.delete(
        `/notification/${data.employeeId}/deleteNotification`
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
      const response = await appAxios.delete(
        `/notification/deleteAllNotification`
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
      const response = await appAxios.post(
        `/notification/saveNotification`,
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
      const response = await appAxios.put(
        `/notification/${id}/updateNotification`,
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
