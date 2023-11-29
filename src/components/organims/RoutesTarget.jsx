import { ReactComponent as Create } from "../../assets/svg/createPointMovil.svg";
import { ReactComponent as GpsRT } from "../../assets/svg/gpsRoutesTarget.svg";
import { ReactComponent as Back } from "../../assets/svg/backIcon.svg";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect } from "react";

function RoutesTarget({
  isOpenRoutesTarget,
  handleReturnVisibility,
  inputValue,
  newAddress,
  setCoorOne,
  setCoorTwo
}) {
  const provider = new OpenStreetMapProvider();

  const getCoordinates = async (address) => {
    if (!address) {
      throw new Error(`La dirección proporcionada es inválida: ${address}`);
    }
    const results = await provider.search({ query: address });
    if (results[0]) {
      const { x: lng, y: lat } = results[0];
      return [lat, lng];
    } else {
      throw new Error(`No se encontraron resultados para la dirección: ${address}`);
    }
  };

  useEffect(() => {
    if (inputValue) {
      getCoordinates(inputValue).then(setCoorOne);
    }
    if (newAddress) {
      getCoordinates(newAddress).then(setCoorTwo);
    }
  }, [inputValue, newAddress]);

  return isOpenRoutesTarget === true ? (
    <section className="absolute flex flex-col w-[400px] h-auto bg-white m-0 top-0 z-[1000] rounded-lg shadow-xl">
      <span className="mt-2 mx-4 pt-2">
        <Back onClick={handleReturnVisibility} className="cursor-pointer" />
      </span>
      <div className="flex">
        <aside>
          <span className="flex items-center justify-center mx-8 m-6">
            <GpsRT className="w-7" />
          </span>
        </aside>
        <aside className="flex flex-col justify-center items-start w-full space-y-6">
          <input
            value={inputValue}
            type="text"
            className="outline-none truncate p-3 border border-[#162128] rounded-lg text-xs w-64"
          />
          <input
            value={newAddress}
            type="text"
            className="outline-none p-3 border border-[#0074b7] rounded-lg text-xs w-64"
            placeholder="Aqui ira la direccion del punto de reciclaje donde iras"
          />
        </aside>
      </div>
      <div className="flex items-center justify-start px-8 gap-12 text-sm pb-2">
        <span>
          <Create className="w-8" />
        </span>
        <h2>Añadir otro destino</h2>
      </div>
    </section>
  ) : null;
}

export default RoutesTarget;
