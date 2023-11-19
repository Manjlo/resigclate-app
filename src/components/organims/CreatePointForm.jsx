import Logo from "../../assets/icons/logo.png";
import ComponentButton from "../atoms/ComponentButton";
import React from "react";

function CreatePointForm({
  newAddress,
  setNewAddress,
  handleSubmit,
  handleSelectPoint,
}) {
  const handleAddrressChange = (event) => {
    setNewAddress(event.target.value);
  };

  return (
    <article className="w-full bg-transparent flex flex-col h-auto">
      <div className="flex justify-between m-4 mr-6 ml-6 h-6">
        <span onClick={handleSelectPoint} className="cursor-pointer hover:text-[#228b22]">
          ←
        </span>
        <img className="w-[25px] h-[25px]" src={Logo} alt="Logo" />
      </div>
      <div className="p-2 mr-4 ml-4 pr-4 pl-4 shadow-md rounded-md text-xs">
        <p>
          Contribuye con tu aporte para que un profesional pueda llevar a cabo
          la práctica del reciclaje. Tu participación es esencial en este
          proceso y puede marcar una gran diferencia en nuestros esfuerzos por
          mantener un medio ambiente saludable. ¡Tu contribución importa!
        </p>
      </div>
      <div className="mr-4 ml-4 mt-4 h-auto text-sm">
        <h3 className="ml-4 mb-2">Detalle del lugar</h3>
        <input
          className="border opacity-80 truncate pl-4 rounded-md w-full h-10 outline-none"
          type="text"
          placeholder="Agrega las coordenadas del punto [lat,lng]"
          value={newAddress}
          onChange={handleAddrressChange}
        />
      </div>
      <div className="flex justify-between m-6">
        <ComponentButton
          buttonStyleMissing={"p-1 sm:pl-4 sm:pr-4"}
          textButton={"Ver direccion"}
          onClick={handleSubmit}
        />
        <ComponentButton
          buttonStyleMissing={"p-1 sm:pl-4 sm:pr-4 bg-[#228b22]"}
          textButton={"Aceptar"}
        />
      </div>
    </article>
  );
}

export default CreatePointForm;
