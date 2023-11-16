import LinkToCreateAccount from "../atoms/LinkToCreateAccount";
import LoginButton from "../atoms/LoginButton";
import InfoItem from "../molecules/InfoItem";
import MainCard from "../templates/MainCard";

function Register() {
  return (
    <MainCard templateStyle={"w-auto"}>
      <div className="flex flex-col w-full items-center pt-4 mt-4 mb-4">
        <h2 className="text-lg sm:text-xl">Crea tu cuenta</h2>
        <ul>
          <li>
            <InfoItem styleMissing={"sm:mr-6"} text={"Tu nombre"} />
            <InfoItem
              styleMissing={"sm:mr-6"}
              type={"email"}
              text={"Tu correo usuario"}
            />
            <InfoItem
              styleMissing={"sm:mr-6"}
              type={"password"}
              text={"Tu contraseña"}
            />
            <InfoItem
              styleMissing={"sm:mr-6"}
              type={"tel"}
              text={"+57 Tu celular"}
            />
          </li>
        </ul>
        <LoginButton
          buttonStyleMissing={"pl-14 pr-14 sm:mb-8 sm:mr-0"}
          textButton={"Crea tu cuenta"}
        />
        <div className="relative flex justify-start">
          <div className="absolute inset-0 border-t-2 border-[#37373e55] opacity-50 h-2"></div>
          <LinkToCreateAccount
            arrow={"←"}
            text={"Iniciar sesion"}
            route={"/"}
          />
        </div>
      </div>
    </MainCard>
  );
}

export default Register;
