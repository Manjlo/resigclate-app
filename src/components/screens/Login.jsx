import React from "react";
import { useNavigate } from "react-router-dom";
import Loge from "../atoms/Loge";
import Loginform from "../organims/LoginForm";
import MainCard from "../templates/MainCard";
import { REGISTER_PATH } from "../router/routes";
import { useForm } from "react-hook-form";
import { login as LoginAuth } from "../../services-firebase/auth";
import useLoginUser from "../../customHooks/useLoginUser";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const callbackRegister = () => {
    navigate(REGISTER_PATH);
  };
  const { login } = useLoginUser(setLoading);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleLogin = async (data) => {
    console.log(loading);
    if (data) {
      const response = await LoginAuth(data.email, data.password);
      if (response?.uid) {
        await login(response.uid);
        navigate("/app");
      } else {
        alert("Error al iniciar sesion");
      }
    }
  };
  return (
    <MainCard templateStyle={"w-5/6 sm:w-3/4 sm:flex md:w-1/2 lg:w-5/4 2xl:w-1/3"}>
      <Loge />
      <Loginform
        errors={errors}
        handleLogin={handleSubmit(handleLogin)}
        register={register}
        callbackRegister={callbackRegister}
      />
    </MainCard>
  );
}

export default Login;
