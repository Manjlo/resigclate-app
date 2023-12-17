import { ReactComponent as IconBarMovilSvg } from "../../assets/svg/barMovil.svg";
import { ReactComponent as IconBarSvg } from "../../assets/svg/iconBars.svg";
import ItemsBar from "../molecules/ItemsBar";

function LateralBarContainer({ handleSelectPoint, usuarioUrl, usuario }) {
  return (
    <div className="w-[100%] md:w-auto absolute mb-4 md:left-1/3 bottom-4 z-[1000]">
      <span className="mx-6 top-[-10px] absolute sm:hidden opacity-80">
        <IconBarMovilSvg />
      </span>
      <span className="top-14 relative hidden sm:block">
        <IconBarSvg />
      </span>
      <ItemsBar
        handleSelectPoint={handleSelectPoint}
        perfilurl={usuarioUrl}
        usuario={usuario}
        styleMissing={"mx-6 grid grid-cols-5 h-auto relative items-center justify-center"}
      />
    </div>
  );
}

export default LateralBarContainer;
