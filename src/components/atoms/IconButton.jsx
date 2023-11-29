function IconButton({ SvgComponent, className, callback }) {
  return (
    <div
      onClick={callback}
      className={`Fw-[45px] h-[45px] flex items-center justify-center cursor-pointer ${className}`}>
      {SvgComponent && <SvgComponent />}
    </div>
  );
}

export default IconButton;
