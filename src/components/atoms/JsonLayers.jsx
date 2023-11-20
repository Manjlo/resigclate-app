import { GeoJSON } from "react-leaflet";
import L from "leaflet";
import icono from "../../assets/svg/recyclingPointsMarker.svg";

function JsonLayers({ data }) {
  const myIcon = L.icon({
    iconUrl: icono,
  });

  const pointToLayer = (feature, latlng) => {
    return L.marker(latlng, { icon: myIcon });
  };

  return <GeoJSON data={data} pointToLayer={pointToLayer} />;
}

export default JsonLayers;
