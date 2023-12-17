import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect } from "react";

export const useCoordinates = ({ inputValue, newAddress, setCoorOne, setCoorTwo }) => {
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

  return {
    address: newAddress
  };
};
