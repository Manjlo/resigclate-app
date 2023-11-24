import IconButton from "../atoms/IconButton";
import { ReactComponent as educationSvg } from "../../assets/svg/educationSvg.svg";
import { ReactComponent as statisticsSvg } from "../../assets/svg/statisticsSvg.svg";
import { ReactComponent as historySvg } from "../../assets/svg/historySvg.svg";
import { ReactComponent as createPointSvg } from "../../assets/svg/createPointMovil.svg";

function ItemsBar({
  perfilurl,
  usuario,
  handleSelectPoint,
  styleMissing,
  setStyleIconButton,
  imgStyleMissing,
}) {
  return (
    <div className={styleMissing}>
      <div className="w-[50px] sm:w-auto h-[50px] sm:h-auto bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-xl ml-4 sm:m-0 flex items-center justify-center">
        <IconButton SvgComponent={educationSvg} />
      </div>
      <div className="w-[50px] sm:w-auto h-[50px] sm:h-auto bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-xl ml-4 sm:m-0 flex items-center justify-center">
        <IconButton SvgComponent={statisticsSvg} />
      </div>
      <IconButton
        callback={handleSelectPoint}
        className={`relative top-[-38px] sm:top-[-26px] hover:scale-95 ${setStyleIconButton}`}
        SvgComponent={createPointSvg}
      />
      <div className="w-[50px] sm:w-auto h-[50px] sm:h-auto bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-xl flex items-center justify-center">
        <IconButton SvgComponent={historySvg} />
      </div>
      <div className="w-[50px] sm:w-auto h-[50px] sm:h-auto bg-white sm:bg-transparent shadow-md sm:shadow-none rounded-xl flex items-center justify-center">
        <div
          className={`rounded-full w-auto h-auto flex items-center justify-center ${imgStyleMissing}`}
        >
          <img
            className="w-[35px] h-[35px] border border-black rounded-full"
            src={perfilurl}
            alt={`esta es la foto de perfil de ${usuario}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemsBar;
