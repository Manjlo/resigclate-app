import { LinkToCreateAccount } from "../atoms/LinkToCreateAccount"
import { LoginButton } from "../atoms/LoginButton"
import { InfoItem } from "../molecules/InfoItem"

function Register() {
  return(
    <div>
       <h2 className='text-xl sm:text-2xl sm:mr-8'>Crea tu cuenta</h2>
      <ul>
        <li>
          <InfoItem text={'Tu nombre'}/>
          <InfoItem text={'Tu correo usuario'}/>
          <InfoItem type={'password'} text={'Tu contraseña'}/>
          <InfoItem text={'Tu celular'}/>
        </li>
      </ul>
      <LoginButton textButton={'Crea tu cuenta'}/>
      <div className='relative'>
        <div className='absolute inset-0 border-t-2 border-[#37373e55] opacity-50 h-2 sm:w-0'></div>
        <LinkToCreateAccount/>
      </div> 
    </div>
  )
}

export { Register };