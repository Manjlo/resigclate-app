import { useState, useEffect } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export const useAddress = (coordinates) => {
  const [address, setAddress] = useState(null);
  const provider = new OpenStreetMapProvider();

  useEffect(() => {
    const getAddress = async () => {
      const results = await provider.search({ query: coordinates.join(",") });
      if (results[0]) {
        setAddress(results[0].label);
      }
    };

    if (coordinates) {
      getAddress();
    }
  }, [coordinates]);

  return address;
};
