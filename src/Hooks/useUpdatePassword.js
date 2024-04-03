import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useUpdatePassword() {
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const passowrdChange = async (input, closeModal, setErrormsg) => {
    setError(false);
    try {
      const res = await Axios.put(
        "http://localhost:8080/changePassword",
        input
      );
      setShow(true);
      setErrormsg("Password Changed.....");
      setTimeout(() => {
        closeModal();
        sessionStorage.removeItem("user");
        navigate("/login");
      }, 1000);
    } catch (error) {
      setError(true);
      setErrormsg(error.response.data.message);
    }
  };

  return { passowrdChange, error, show };
}

export default useUpdatePassword;
