import { ReactComponent as UserSvg} from '../../assets/svg/usersvg.svg'
import { ReactComponent as PasswordSvg} from '../../assets/svg/passwordsvg.svg'
import { InfoItem } from "../molecules/InfoItem";
import { LoginButton } from '../atoms/LoginButton';
import { LinkToCreateAccount } from '../atoms/LinkToCreateAccount';

function Loginform () {
  return (
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
  )
}

export { Loginform }