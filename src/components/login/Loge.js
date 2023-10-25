import React from "react";
import logo from "public/logo.png"

function Loge() {
    return (
      <div className="relative flex-1 text-[#228b22] text-2xl grid place-items-center">
        <div className="absolute inset-0 border-r-2 border-gray-400 opacity-50 mt-10 mb-10"></div>
          <div className="flex flex-col items-center space-y-4">
            <img src={logo} className="w-32 h-32 md:w-34 md:h-34 lg:w-44 lg:h-44"/>
            <h2>Resigcla</h2>
          </div>
      </div>
    );
  }
  
  export { Loge };
  