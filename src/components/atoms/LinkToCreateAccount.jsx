import { NavLink } from "react-router-dom";

function LinkToCreateAccount({ text, route, arrow }) {
    return(
      <div className="text-xs lg:text-md pb-2 ml-28 mt-4 sm:mr-4 cursor-pointer grid grid-flow-col gap-2">
        <span className='text-[#0074B7]'>{ arrow }</span>
        <NavLink className={'hover:underline'} to={route}>{ text }</NavLink>
      </div>
    );
}
  
export { LinkToCreateAccount }