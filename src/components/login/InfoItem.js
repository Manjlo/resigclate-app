import React from "react";

function InfoItem({ text, SvgComponent }) {
    return (
      <div className="flex items-center justify-left border border-[#DACDA6] m-6 mr-12 rounded-md">
        <SvgComponent className="ml-4"/>
        <input className="p-4 focus:outline-none" placeholder={text}/>
      </div>
    );
  }
  
  export { InfoItem };
  