import React from "react";
import { useNavigate } from "react-router-dom";
import Loge from "../atoms/Loge";
import Loginform from "../organims/LoginForm";
import MainCard from "../templates/MainCard";
import { REGISTER_PATH } from "../router/routes";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const callbackRegister = () => {
    navigate(REGISTER_PATH);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
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
