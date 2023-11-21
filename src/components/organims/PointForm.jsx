import SvgToDiv from "../../components/atoms/SvgToDiv";
import { ReactComponent as routeIcon } from "../../assets/svg/goToRoute.svg";
import { ReactComponent as materialIcon } from "../../assets/svg/materialRegister.svg";
import { ReactComponent as addressIcon } from "../../assets/svg/adress.svg";
import { ReactComponent as timeIcon } from "../../assets/svg/time.svg";

function PointForm({ data, recyPointSelected }) {
  return (
    <article className="w-[400px] h-auto mb-6 flex flex-col overflow-auto max-h-[91vh]">
      {data.features.map((feature, index) => {
        return (
          <div key={index}>
            {recyPointSelected &&
              recyPointSelected.properties.id === feature.properties.id && (
                <img
                  className="rounded-t-lg"
                  src={feature.properties.url_image}
                  alt={feature.properties.nombre}
                />
              )}
          </div>
        );
      })}
      {data.features.map((feature, index) => {
        return (
          <div key={index}>
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
                <aside className="grid grid-cols-2 text-xs p-2 pr-8 py-6 border-b-2 border-y-stone-400">
                  <aside className="flex items-center justify-center space-x-4">
                    <span>
                      <SvgToDiv
                        style={"top-0 cursor-pointer"}
                        SvgComponent={routeIcon}
                      />
                    </span>
                    <h4>Mira la ruta</h4>
                  </aside>
                  <aside className="flex items-center justify-center space-x-4">
                    <span>
                      <SvgToDiv
                        style={"top-0 cursor-pointer"}
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
                <aside className="grid grid-rows-2 items-center justify-left py-4 pl-10 px-8 space-y-4 border-b-2 border-y-stone-400">
                  <aside className="flex items-center justify-left text-left text-xs space-x-2">
                    <span>
                      <SvgToDiv
                        style={"top-0 cursor-pointer"}
                        SvgComponent={addressIcon}
                      />
                    </span>
                    <p>{feature.properties.direccion}</p>
                  </aside>
                  <aside className="flex items-center justify-left text-left text-xs space-x-4 pl-1">
                    <span>
                      <SvgToDiv
                        style={"top-0 cursor-pointer"}
                        SvgComponent={timeIcon}
                      />
                    </span>
                    <p>{feature.properties.horario}</p>
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
