import React, { useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../router/routes";
import { onAuthChange } from "../../../services-firebase/auth";
import useLoginUser from "../../../customHooks/useLoginUser";
const LoadingController = () => {
  const [loading, setLoading] = React.useState(true);
  const { login } = useLoginUser(setLoading);

  const navigate = useNavigate();
  console.log(loading);
  useEffect(() => {
    const getAuthData = async (user) => {
      if (user) {
        const isDataUser = await login(user.uid);
        if (!isDataUser) {
          navigate(LOGIN_PATH);
          return;
        }
        navigate("/app");
      } else {
        navigate(LOGIN_PATH);
      }
    };

    onAuthChange(getAuthData);
  }, []);

  return <LoadingScreen />;
};

export default LoadingController;
