import React from "react";

function ComponentButton({ textButton, buttonStyleMissing, onClick }) {
  return (
    <div className="pb-8 sm:pb-0">
      <button
        onClick={onClick}
        className={`scale-on-click text-xs p-3 pr-8 pl-8 sm:pr-12 sm:pl-12 border bg-[#0074B7] rounded-md text-white ${buttonStyleMissing}`}
      >
        {textButton}
      </button>
    </div>
  );
}

export default ComponentButton;
