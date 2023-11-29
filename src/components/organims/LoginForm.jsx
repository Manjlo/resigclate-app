import React from "react";
import { ReactComponent as UserSvg } from "../../assets/svg/usersvg.svg";
import { ReactComponent as PasswordSvg } from "../../assets/svg/passwordsvg.svg";
import InputWithIcon from "../atoms/InputWithIcon";
import LoginButton from "../atoms/LoginButton";
import LinkToCreateAccount from "../atoms/LinkToCreateAccount";

// eslint-disable-next-line react/prop-types
function Loginform({ handleLogin, callbackRegister, register, errors }) {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return (
    <div className="flex flex-col items-center justify-center pt-4 pb-4 sm:pt-16 sm:pb-16">
      <h2 className="text-xl sm:text-2xl sm:mr-8">Iniciar sesion</h2>
      <ul>
        <li className="form-container">
          <InputWithIcon
            register={register}
            name={"email"}
            error={errors?.email}
            isRequired={true}
            regex={emailPattern}
            type={"email"}
            messageError={"El formato no es valido"}
            text={"Correo usuario"}
            SvgComponent={UserSvg}
          />
          <InputWithIcon
            isRequired={true}
            minLength={8}
            error={errors?.password}
            name={"password"}
            type={"password"}
            messageError={"El formato no es valido"}
            register={register}
            text={"Contraseña"}
            SvgComponent={PasswordSvg}
          />
        </li>
      </ul>
      <LoginButton
        handleLogin={handleLogin}
        route={"/app"}
        buttonStyleMissing={"sm:mr-6"}
        textButton={"Ingresa"}
      />
      <div className="relative">
        <div className="absolute inset-0 border-t-2 border-[#37373e55] opacity-50 h-2 sm:w-0"></div>
        <LinkToCreateAccount arrow={"→"} text={"Crear una cuenta"} callback={callbackRegister} />
      </div>
    </div>
  );
}

export default Loginform;
