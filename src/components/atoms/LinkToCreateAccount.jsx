function LinkToCreateAccount({ text, arrow, callback }) {
  return (
    <div
      className="text-xs lg:text-md pb-2 ml-28 mt-4 sm:mr-4 cursor-pointer grid grid-flow-col gap-2"
      onClick={callback}>
      <span className="text-[#0074B7]">{arrow}</span>
      {text}
    </div>
  );
}

export { LinkToCreateAccount };
