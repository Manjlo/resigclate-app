function SvgToDiv({SvgComponent, style}){
    return (
        <div className={`h-auto w-auto relative top-14 ${style}`}>
            {SvgComponent && <SvgComponent />}
        </div>
    )
};

export default SvgToDiv;