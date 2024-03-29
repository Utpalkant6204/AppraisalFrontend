import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(Props) {
  const { Component } = Props;
  const navigate = useNavigate();
  useEffect(() => {
    let check = sessionStorage.getItem("user");
    if (!check) {
      navigate("/login", { replace: true });
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
