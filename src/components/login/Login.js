import { ReactComponent as UserSvg} from '../../assets/svg/usersvg.svg'
import { ReactComponent as PasswordSvg} from '../../assets/svg/passwordsvg.svg'
import { InfoItem } from "./InfoItem";
import { Loge } from "./Loge";
import { LoginButton } from './LoginButton';
import { LinkToCreateAccount } from './LinkToCreateAccount';


function Login() {
  return(
    <div className="flex items-center justify-center min-h-screen">
      <div className="pt-24 sm:pt-0 w-5/6 bg-white rounded-2xl shadow-2xl sm:w-3/4 sm:flex md:w-1/2 lg:w-5/4 2xl:w-1/3">
        <Loge/>
        <div className="flex flex-col items-center justify-center pt-4 pb-4 sm:pt-16 sm:pb-16">
          <h2 className='text-xl sm:text-2xl sm:mr-8'>Iniciar sesion</h2>
          <ul>
            <li>
              <InfoItem text={'Correo usuario'} SvgComponent={UserSvg}/>
              <InfoItem type={'password'} text={'Contraseña'} SvgComponent={PasswordSvg}/>
            </li>
          </ul>
          <LoginButton textButton={'Ingresa'}/>
          <div className='relative'>
            <div className='absolute inset-0 border-t-2 border-[#37373e55] opacity-50 h-2 sm:w-0'></div>
            <LinkToCreateAccount/>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login }