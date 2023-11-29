import React from "react";
import LoadingScreen from "./LoadingScreen";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../router/routes";

const LoadingController = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate(LOGIN_PATH);
    }, 3000);
  }, []);

  return <LoadingScreen />;
};

export default LoadingController;
