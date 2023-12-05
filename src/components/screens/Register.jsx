import React from "react";
import MainCard from "../templates/MainCard";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH, APP_PATH } from "../router/routes";
import RegisterForm from "../organims/RegisterForm";
import { useForm } from "react-hook-form";
import { register as AuthRegister } from "../../services-firebase/auth";
import { createUser } from "../../services-controller/services-request/services-user";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/auth.reducer";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const callbackLogin = () => {
    navigate(LOGIN_PATH);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleLogin = async (data) => {
    if (data) {
      const [response, resData] = await AuthRegister(data.email, data.password);
      if (response === 200) {
        const user = {
          name: data.name,
          email: data.email,
          id: resData?.user.uid,
          register_type: 100,
          password: data.password,
          phone: data.phone,
          urlThumbnail: ""
        };

        const userRes = await createUser(user);
        if (userRes.code === 200) {
          dispatch(setUser(user));
          navigate(APP_PATH);
        } else {
          alert("Error al crear el usuario");
          navigate(LOGIN_PATH);
        }
      }
      console.log(response);
    }
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
