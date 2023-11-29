import logo from "../../assets/icons/logo.png";

function Loge() {
  return (
    <div className="relative flex-1 text-[#228b22] pt-20 sm:pt-0 text-2xl grid place-items-center">
      <div className="absolute inset-0 border-r-2 border-gray-400 opacity-50 mt-10 mb-10"></div>
      <div className="flex flex-col items-center space-y-4">
        <img src={logo} className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40" />
        <h2 className="sm:block hidden">Resigcla</h2>
      </div>
    </div>
  );
}

export default Loge;
