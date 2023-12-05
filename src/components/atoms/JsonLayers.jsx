import { GeoJSON } from "react-leaflet";
import L from "leaflet";
import icono from "../../assets/svg/recyclingPointsMarker.svg";
import iconoSeleccionado from "../../assets/svg/selectedPoint.svg";

function JsonLayers({ data, handleSelectRecyPoint, setCoorTwo, handleClick, handleRouteView }) {
  const myIcon = L.icon({
    iconUrl: icono
  });

  const selectedIcon = L.icon({
    iconUrl: iconoSeleccionado
  });

  let selectedMarker = null;
  let markerObject = [];

  const pointToLayer = (feature, latlng) => {
    const marker = L.marker(latlng, { icon: myIcon });
    marker.on("click", () => {
      selectedMarker?.setIcon(myIcon);
      marker.setIcon(selectedIcon);
      selectedMarker = marker;
      markerObject = {
        latlng: { lat: selectedMarker.getLatLng().lat, lng: selectedMarker.getLatLng().lng }
      };
      setCoorTwo(markerObject);
      handleClick(markerObject);
      handleSelectRecyPoint(feature);
      handleRouteView();
    });
    return marker;
  };

  return <GeoJSON data={data} pointToLayer={pointToLayer} />;
}

export default JsonLayers;
