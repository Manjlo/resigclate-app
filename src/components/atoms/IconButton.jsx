function IconButton({SvgComponent, className}) {
    return (
        <div className={`Fw-[45px] h-[45px] flex items-center justify-center cursor-pointer ${className}`}>
            {SvgComponent && <SvgComponent />}
        </div >
    )
};

export { IconButton };