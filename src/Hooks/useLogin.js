import { useNavigate } from "react-router-dom";
import Axios from "axios";


function useLogin() {
  const navigation = useNavigate();

  const checkValidation = async (input, toast) => {
    try {
      const res = await Axios.post("http://localhost:8080/login", input);
      sessionStorage.setItem("user", JSON.stringify(res.data));
      if (res.data.admin == true) {
        navigation("/admin-home", { replace: true });
      }
      if (res.data.admin == false) {
        navigation("/employee-home", { replace: true });
      }
    } catch (error) {
      console.error(error);
      error.response.data
        ? toast.error(error.response.data.message, { position: "top-center" })
        : toast.error("Bad Credentials", { position: "top-center" });
    }
  };

  return { checkValidation };
}

export default useLogin;
