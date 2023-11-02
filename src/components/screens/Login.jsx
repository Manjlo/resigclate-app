import { Loge } from "../molecules/Loge";
import { Loginform } from "../organims/LoginForm";

function Login() {
  return(
    <div className="flex items-center justify-center min-h-screen">
      <div className="pt-24 sm:pt-0 w-5/6 bg-white rounded-2xl shadow-2xl sm:w-3/4 sm:flex md:w-1/2 lg:w-5/4 2xl:w-1/3">
        <Loge/>
        <Loginform/>
      </div>
    </div>
  );
}

export { Login }