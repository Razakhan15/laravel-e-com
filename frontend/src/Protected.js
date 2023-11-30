import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  let Cmp = props.Cmp;
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Cmp />
    </div>
  );
};

export default Protected;