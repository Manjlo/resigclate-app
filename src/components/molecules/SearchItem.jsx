
function SearchItem({ type, text, SvgComponent }){
    return(
        <div className="flex h-auto w-full m-2">
        {SvgComponent && <SvgComponent />}
        <input type={type} placeholder={text} className="w-[80%] h-auto ml-2 text-left"/>
        </div>
    )
}

export { SearchItem };