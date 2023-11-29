function SearchItem({ type, text, SvgComponent, w }) {
  return (
    <div className="flex h-auto w-full m-2">
      {SvgComponent && <SvgComponent />}
      <input
        type={type}
        placeholder={text}
        className={`w-3/4 ml-2 text-left outline-none text-md sm:text-sm ${w}`}
      />
    </div>
  );
}

export default SearchItem;
