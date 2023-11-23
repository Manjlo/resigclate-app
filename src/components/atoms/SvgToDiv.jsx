function SvgToDiv({SvgComponent, styleDiv}){
    return (
        <div className={`h-auto w-auto ${styleDiv}`}>
            {SvgComponent && <SvgComponent />}
        </div>
    )
};

export default SvgToDiv;