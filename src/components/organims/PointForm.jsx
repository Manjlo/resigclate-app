import SvgToDiv from "../../components/atoms/SvgToDiv";
import { ReactComponent as routeIcon } from "../../assets/svg/goToRoute.svg";
import { ReactComponent as routeIconMovil } from "../../assets/svg/goToRouteMovil.svg";
import { ReactComponent as materialIcon } from "../../assets/svg/materialRegister.svg";
import { ReactComponent as addressIcon } from "../../assets/svg/adress.svg";
import { ReactComponent as addressIconMovil } from "../../assets/svg/adressMovil.svg";
import { ReactComponent as timeIcon } from "../../assets/svg/time.svg";
import { ReactComponent as timeIconMovil } from "../../assets/svg/timeMovil.svg";
import { ReactComponent as searchIcon } from "../../assets/svg/searchsvg.svg";
import { ReactComponent as backIcon } from "../../assets/svg/backIcon.svg";
import SearchItem from "../molecules/SearchItem";
import { ReactComponent as UserSvg } from "../../assets/svg/searchsvg.svg";

function PointForm({ data, recyPointSelected, handleSelectRecyPoint }) {
  return (
    <article className="sm:w-[400px] w-[100vw] h-[100vh] rounded-lg sm:h-auto sm:mb-6 flex flex-col overflow-auto sm:max-h-[88vh] 2xl:max-h-[91vh]">
      {data.features.map((feature, index) => {
        return (
          <div key={index}>
            {recyPointSelected &&
              recyPointSelected.properties.id === feature.properties.id && (
                <div className="sm:hidden flex space-x-72 px-8 pt-10 items-center">
                  <span onClick={handleSelectRecyPoint}>
                    <SvgToDiv SvgComponent={backIcon} />
                  </span>
                  <span>
                    <SvgToDiv SvgComponent={searchIcon} />
                  </span>
                </div>
              )}
          </div>
        );
      })}
      {data.features.map((feature, index) => {
        return (
          <div key={index}>
            {recyPointSelected &&
              recyPointSelected.properties.id === feature.properties.id && (
                <div className="sm:hidden p-4 px-8 text-lg">
                  <h1>{feature.properties.nombre}</h1>
                </div>
              )}
          </div>
        );
      })}
      {data.features.map((feature, index) => {
        return (
          <div key={index}>
            {recyPointSelected &&
              recyPointSelected.properties.id === feature.properties.id && (
                <>
                  <div
                    className={
                      "absolute w-[350px] top-6 left-6 h-auto bg-white  rounded-md shadow-xl z-[1000] hidden sm:block"
                    }
                  >
                    <SearchItem
                      type={"search"}
                      text={"Buscar centros de reciclaje ..."}
                      SvgComponent={UserSvg}
                      w={"sm:w-3/4 h-auto"}
                    />
                    <div className="absolute top-3 right-2 rounded-sm h-4 w-6 flex items-center justify-center cursor-pointer">
                      <span onClick={handleSelectRecyPoint}>
                        <SvgToDiv SvgComponent={backIcon} />
                      </span>
                    </div>
                  </div>
                  <img
                    className="sm:w-auto w-5/6 sm:m-0 m-2 mx-8 rounded-lg sm:rounded-t-lg sm:rounded-b-none"
                    src={feature.properties.url_image}
                    alt={feature.properties.nombre}
                  />
                  <div className="w-full h-[1px] bg-black opacity-40 mt-4 sm:hidden"></div>
                </>
              )}
          </div>
        );
      })}
      {data.features.map((feature, index) => {
        return (
          <div key={index} className="hidden sm:block">
            {recyPointSelected &&
              recyPointSelected.properties.id === feature.properties.id && (
                <aside className="w-full h-auto flex flex-col justify-center items-center border-b-2 border-y-stone-400 space-y-2 p-6">
                  <h1 className="text-2xl text-center">
                    {feature.properties.nombre}
                  </h1>
                  <h3 className="font-bold text-xl">{feature.properties.id}</h3>
                  <h4 className="text-xs">{feature.properties.tipo}</h4>
                </aside>
              )}
          </div>
        );
      })}
      {data.features.map((feature, index) => {
        return (
          <div key={index}>
            {recyPointSelected &&
              recyPointSelected.properties.id === feature.properties.id && (
                <aside className=" flex items-center justify-start sm:grid sm:grid-cols-2 text-xs p-2 pr-8 sm:py-6 sm:border-b-2 sm:border-y-stone-400 xs:border-none py-1 pt-6 ml-10 sm:ml-0">
                  <aside className="flex ml-[-18px] sm:ml-2 items-center justify-center space-x-6 sm:space-x-2">
                    <span>
                      <SvgToDiv
                        styleDiv={"top-0 cursor-pointer hidden sm:block"}
                        SvgComponent={routeIcon}
                      />
                    </span>
                    <span>
                      <SvgToDiv
                        styleDiv={"top-0 cursor-pointer sm:hidden"}
                        SvgComponent={routeIconMovil}
                      />
                    </span>
                    <h4>Mira la ruta</h4>
                  </aside>
                  <aside className="sm:flex items-center justify-center space-x-4 hidden">
                    <span>
                      <SvgToDiv
                        styleDiv={"top-0 cursor-pointer"}
                        SvgComponent={materialIcon}
                      />
                    </span>
                    <h4>Registra los materiales</h4>
                  </aside>
                </aside>
              )}
          </div>
        );
      })}
      {data.features.map((feature, index) => {
        return (
          <div key={index}>
            {recyPointSelected &&
              recyPointSelected.properties.id === feature.properties.id && (
                <aside className="grid grid-rows-2 items-center justify-left py-4 pl-10 px-8 space-y-4 sm:border-b-2 sm:border-y-stone-400 xs:border-none">
                  <aside className="flex items-center justify-left text-left text-xs space-x-3 pl-1 sm:pl-0">
                    <span>
                      <SvgToDiv
                        styleDiv={"top-0 cursor-pointer hidden sm:block"}
                        SvgComponent={addressIcon}
                      />
                    </span>
                    <span>
                      <SvgToDiv
                        styleDiv={"top-0 cursor-pointer sm:hidden"}
                        SvgComponent={addressIconMovil}
                      />
                    </span>
                    <p className="pl-3 sm:pl-1">
                      {feature.properties.direccion}
                    </p>
                  </aside>
                  <aside className="flex items-center justify-left text-left text-xs space-x-4 pl-0 sm:pl-1">
                    <span>
                      <SvgToDiv
                        styleDiv={"top-0 cursor-pointer hidden sm:block"}
                        SvgComponent={timeIcon}
                      />
                    </span>
                    <span>
                      <SvgToDiv
                        styleDiv={"top-0 cursor-pointer sm:hidden"}
                        SvgComponent={timeIconMovil}
                      />
                    </span>
                    <p className="pl-2 sm:pl-0">{feature.properties.horario}</p>
                  </aside>
                </aside>
              )}
          </div>
        );
      })}
    </article>
  );
}

export default PointForm;
