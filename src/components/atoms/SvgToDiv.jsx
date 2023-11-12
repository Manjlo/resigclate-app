function SvgToDiv({SvgComponent}){
    return (
        <div className="h-auto w-auto relative top-14">
            {SvgComponent && <SvgComponent />}
        </div>
    )
};

export { SvgToDiv };