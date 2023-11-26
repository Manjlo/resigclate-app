function InfoItem({ text, SvgComponent, type, styleMissing }) {
  return (
    <div
      className={`w-[250px] flex items-center justify-left border border-[#0074B7] m-6 sm:mr-12 rounded-md ${styleMissing}`}
    >
      {SvgComponent && <SvgComponent className="ml-4" />}
      <input
        type={type}
        className="p-2 focus:outline-none"
        placeholder={text}
      />
    </div>
  );
}

export default InfoItem;
