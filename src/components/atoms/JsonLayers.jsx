import { GeoJSON } from "react-leaflet";
import L from "leaflet";
import icono from "../../assets/svg/recyclingPointsMarker.svg";

function JsonLayers({ data, handleSelectRecyPoint }) {
  const myIcon = L.icon({
    iconUrl: icono,
  });

  /* const pointToLayer = (feature, latlng) => {
    return L.marker(latlng, { icon: myIcon });
  }; */

  const pointToLayer = (feature, latlng) => {
    const marker = L.marker(latlng, { icon: myIcon });
    marker.on("click", () => {
      // Aquí puedes manejar el evento de clic.
      // Por ejemplo, podrías llamar a una función con la información del punto:
      handleSelectRecyPoint(feature);
    });
    return marker;
  };

  return <GeoJSON data={data} pointToLayer={pointToLayer} />;
}

export default JsonLayers;
