import React from "react";
import MainCard from "../templates/MainCard";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../router/routes";
import RegisterForm from "../organims/RegisterForm";
import { useForm } from "react-hook-form";

function Register() {
  const navigate = useNavigate();
  const callbackLogin = () => {
    navigate(LOGIN_PATH);
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
    <MainCard templateStyle={"w-auto"}>
      <RegisterForm
        errors={errors}
        handleSubmit={handleSubmit(handleLogin)}
        register={register}
        callbackLogin={callbackLogin}
      />
    </MainCard>
  );
}

export default Register;
