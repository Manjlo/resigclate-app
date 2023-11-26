import { useNavigate } from "react-router-dom";
import Loge from "../atoms/Loge";
import Loginform from "../organims/LoginForm";
import MainCard from "../templates/MainCard";
import { REGISTER_PATH } from "../router/routes";

function Login() {
  const navigate = useNavigate();
  const callbackRegister = () => {
    navigate(REGISTER_PATH)
  }
  return(
    <MainCard templateStyle={'w-5/6 sm:w-3/4 sm:flex md:w-1/2 lg:w-5/4 2xl:w-1/3'}>
      <Loge/>
      <Loginform callbackRegister={callbackRegister}/>
    </MainCard>
  );
}

export default Login;