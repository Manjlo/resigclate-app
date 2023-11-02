
function InfoItem({ text, SvgComponent, type }) {
    return (
      <div className="w-4/5 flex items-center justify-left border border-[#0074B7] m-6 sm:mr-12 sm:w-3/4 rounded-md">
        <SvgComponent className="ml-4"/>
        <input type={type} className="p-2 focus:outline-none" placeholder={text}/>
      </div>
  );
}
  
export { InfoItem };