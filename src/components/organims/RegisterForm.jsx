import React from "react";
import InputWithIcon from "../atoms/InputWithIcon";
import LoginButton from "../atoms/LoginButton";
import LinkToCreateAccount from "../atoms/LinkToCreateAccount";
import { EMAIL, PASSWORD, PHONE } from "../../utils/codeRegex";

const RegisterForm = ({ register, handleSubmit, errors, callbackLogin }) => {
  return (
    <div className="flex flex-col w-full items-center pt-4 mt-4 mb-4">
      <h2 className="text-lg sm:text-xl">Crea tu cuenta</h2>
      <ul>
        <li>
          <InputWithIcon register={register} name={"name"} text={"Tu nombre"} />
          <InputWithIcon
            register={register}
            error={errors?.email}
            regex={EMAIL}
            name={"email"}
            messageError={"El formato no es valido"}
            isRequired={true}
            type={"email"}
            text={"Tu correo electronico"}
          />
          <InputWithIcon
            register={register}
            name={"password"}
            regex={PASSWORD}
            isRequired={true}
            messageError={"El formato no es valido"}
            error={errors?.password}
            type={"password"}
            text={"Tu contraseña"}
          />
          <InputWithIcon
            regex={PHONE}
            register={register}
            messageError={"El formato no es valido"}
            error={errors.phone}
            name={"phone"}
            type={"tel"}
            text={"+57 Tu celular"}
          />
        </li>
      </ul>
      <LoginButton
        buttonStyleMissing={"pl-14 pr-14 sm:mb-8 sm:mr-0"}
        textButton={"Crea tu cuenta"}
        handleLogin={handleSubmit}
      />
      <div className="relative flex justify-start">
        <div className="absolute inset-0 border-t-2 border-[#37373e55] opacity-50 h-2"></div>
        <LinkToCreateAccount arrow={"←"} text={"Iniciar sesion"} callback={callbackLogin} />
      </div>
    </div>
  );
};

export default RegisterForm;
