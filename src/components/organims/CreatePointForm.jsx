import Logo from "../../assets/icons/logo.png";
import { useAddress } from "../../custom-hooks/useAddress";
import { useAddressToCoords } from "../../custom-hooks/useAddressToCoords";
import ComponentButton from "../atoms/ComponentButton";
import React from "react";

function CreatePointForm({ setCoordsNewPoint, newAddress, setNewAddress, handleSelectPoint }) {
  const coordinates =
    newAddress && newAddress.lat && newAddress.lng ? [newAddress.lat, newAddress.lng] : null;
  const address = coordinates ? useAddress(coordinates) : null;
  console.log("this is the " + address);
  const { searchCoords } = useAddressToCoords();

  const getCoords = async () => {
    if (address == null || address == "undefined") return;
    if (address) {
      const coords = await searchCoords(address);
      console.log(coords);
    }
  };

  const handleAddrressChange = (event) => {
    console.log(event.target.value + "ghghhg");
    setNewAddress(event.target.value);
    setCoordsNewPoint(event.target.value);
  };

  return (
    <div className="pointform-animation bg-white absolute shadow-2xl rounded-none sm:rounded-lg sm:w-[400px] w-full h-auto top-0 sm:top-6 left-0 sm:left-6 z-[10000]">
      <article className="pointform-animation w-full bg-transparent flex flex-col h-auto sm:pt-0 pt-4">
        <div className="flex justify-between m-4 mr-6 ml-6 h-6">
          <span
            onClick={handleSelectPoint}
            className="cursor-pointer hover:text-[#228b22] flex items-center justify-center text-xl">
            ←
          </span>
          <img className="w-[25px] h-[25px]" src={Logo} alt="Logo" />
        </div>
        <div className="p-2 mr-4 ml-4 pr-4 pl-4 shadow-md rounded-md text-xs">
          <p>
            Contribuye con tu aporte para que un profesional pueda llevar a cabo la práctica del
            reciclaje. Tu participación es esencial en este proceso y puede marcar una gran
            diferencia en nuestros esfuerzos por mantener un medio ambiente saludable. ¡Tu
            contribución importa!
          </p>
        </div>
        <div className="mr-4 ml-4 mt-4 h-auto text-sm">
          <h3 className="ml-4 mb-2">Detalle del lugar</h3>
          <input
            className="border opacity-80 truncate pl-4 rounded-md w-full h-10 outline-none"
            type="text"
            placeholder="Agrega las coordenadas del punto [lat,lng]"
            value={address}
            onChange={handleAddrressChange}
          />
        </div>
        <div className="flex justify-between m-6">
          <ComponentButton
            buttonStyleMissing={"p-1 sm:pl-4 sm:pr-4 bg-[#228b22]"}
            textButton={"Aceptar"}
            onClick={getCoords}
          />
        </div>
      </article>
    </div>
  );
}

export default CreatePointForm;
