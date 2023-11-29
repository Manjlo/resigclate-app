function InputWithIcon({
  text,
  SvgComponent,
  type,
  register,
  isRequired,
  regex,
  maxLength,
  minLength,
  error,
  messageError,
  name
}) {
  return (
    <div className="sm:w-full sm:mr-12">
      <div
        className={`flex items-center content-center  border border-[#0074B7] ml-6 mr-6 mt-4 rounded-md 
      ${error ? "border-red-500" : ""}`}>
        {SvgComponent && <SvgComponent className="ml-4" />}
        <input
          type={type}
          className="p-3 focus:outline-none"
          placeholder={text}
          {...register(name, {
            required: isRequired,
            pattern: regex,
            maxLength: maxLength ? maxLength : null,
            minLength: minLength ? minLength : null
          })}
        />
      </div>

      {error?.type === "pattern" && (
        <span className="text-red-500 text-xs ml-6">{messageError}</span>
      )}
      {error?.type === "required" && (
        <span className="text-red-500 text-xs ml-6">Campo requerido</span>
      )}
      {error?.type === "minLength" && (
        <span className="text-red-500 text-xs ml-6">{"la longitud minima es de" + minLength}</span>
      )}
      {error?.type === "maxLength" && (
        <span className="text-red-500 text-xs ml-6">{"la longitud maxima es de" + maxLength}</span>
      )}
    </div>
  );
}

export default InputWithIcon;
