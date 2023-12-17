import { useState } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export const useAddressOnMap = () => {
  const [newAddress, setNewAddress] = useState("");

  const geocodeAddress = (lat, lng) => {
    const provider = new OpenStreetMapProvider();
    provider.search({ query: `${lat},${lng}` }).then((results) => {
      const thisAddress = results[0]?.label || "";
      setNewAddress(thisAddress);
    });
  };

  return {
    newAddress,
    geocodeAddress,
    setNewAddress
  };
};
