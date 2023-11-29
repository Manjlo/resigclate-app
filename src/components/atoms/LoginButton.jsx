import React from "react";

function LoginButton({ textButton, buttonStyleMissing, handleLogin }) {
  return (
    <div className="pb-8 sm:pb-0">
      <button
        onClick={handleLogin}
        className={`scale-on-click mt-6 text-xs p-3 pr-8 pl-8 sm:pr-12 sm:pl-12 border bg-[#0074B7] rounded-md text-white ${buttonStyleMissing}`}>
        {textButton}
      </button>
    </div>
  );
}

export default LoginButton;
