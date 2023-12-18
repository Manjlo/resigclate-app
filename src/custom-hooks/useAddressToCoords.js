import { OpenStreetMapProvider } from "leaflet-geosearch";

export function useAddressToCoords() {
  const provider = new OpenStreetMapProvider();
  console.log(provider);
  const searchCoords = async ({ address }) => {
    const results = await provider.search({ query: address });
    const { x, y } = results[0];
    console.log(`Latitud: ${y}, Longitud: ${x}`);
  };

  return { searchCoords };
}
