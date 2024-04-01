import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "../Pages/NotFound";

function Protected(Props) {
  const { Component } = Props;
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const User = JSON.parse(sessionStorage.getItem("user")) || null;
    if (User === null) {
      navigate("/login", { replace: true });
    } else {
      setAdmin(User.admin);
    }
  }, [navigate]);
  
  return admin ? <NotFound /> : <Component />;
}

export default Protected;
