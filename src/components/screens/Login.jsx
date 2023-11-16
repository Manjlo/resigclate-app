import Loge from "../molecules/Loge";
import Loginform from "../organims/LoginForm";
import MainCard from "../templates/MainCard";

function Login() {
  return (
    <MainCard
      templateStyle={"w-5/6 sm:w-3/4 sm:flex md:w-1/2 lg:w-5/4 2xl:w-1/3"}
    >
      <Loge />
      <Loginform />
    </MainCard>
  );
}

export default Login;