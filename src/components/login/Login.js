import { ReactComponent as UserSvg} from 'public/usersvg.svg'
import { ReactComponent as PasswordSvg} from 'public/passwordsvg.svg'
import { InfoItem } from "./InfoItem";
import { Loge } from "./Loge";
import { LoginButton } from './LoginButton';
import { LinkToCreateAccount } from './LinkToCreateAccount';


function Login() {
  return(
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full sm:w-3/4 md:w-2/5 flex bg-white rounded-2xl shadow-2xl">
        <Loge/>
        <div className="flex-1 flex flex-col items-center justify-center pt-16 pb-16">
          <h2 className='text-2xl mr-8'>Iniciar sesion</h2>
          <ul>
            <li>
              <InfoItem text={'Correo usuario'} SvgComponent={UserSvg}/>
              <InfoItem text={'Contraseña'} SvgComponent={PasswordSvg}/>
            </li>
          </ul>
          <LoginButton/>
          <LinkToCreateAccount/>
        </div>
      </div>
    </div>
  );
}

export { Login }