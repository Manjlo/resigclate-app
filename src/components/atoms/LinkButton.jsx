function LinkButton({ text, backgroundColor, textColor, callback, children }) {
  return (
    <div
      style={{ backgroundColor }}
      className="text-xs lg:text-md pb-2 ml-28 mt-4 sm:mr-4 cursor-pointer grid grid-flow-col gap-2"
      onClick={callback}>
      <span style={{ color: textColor }}>{children}</span>
      {text}
    </div>
  );
}

export default LinkButton;
