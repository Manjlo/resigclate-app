import { NavLink } from "react-router-dom";

function LinkToCreateAccount() {
    return(
      <div className="text-xs lg:text-md pb-2 ml-28 mt-4 sm:mr-4 cursor-pointer hover:underline">
        <NavLink to={'/register-page'}>Crear una cuenta <span>➡️</span></NavLink>
      </div>
    );
}
  
export { LinkToCreateAccount }