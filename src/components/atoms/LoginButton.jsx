
function LoginButton({textButton}) {
    return(
      <div className="pb-8 sm:pb-0">
        <button className="LoginButton text-xs sm:mr-6 p-2 pr-8 pl-8 sm:pr-12 sm:pl-12 border bg-[#0074B7] rounded-md text-white">{textButton}</button>
      </div>
    );
  }
  
  export { LoginButton }