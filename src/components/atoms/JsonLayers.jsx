import { GeoJSON } from "react-leaflet";
import L from "leaflet";
import icono from "../../assets/svg/recyclingPointsMarker.svg";
import iconoSeleccionado from "../../assets/svg/selectedPoint.svg";
import { useCallback, useState } from "react";

function JsonLayers({ data, handleSelectRecyPoint, setCoorTwo }) {
  const [isPointClicked, setIsPointClicked] = useState(false);

  const myIcon = L.icon({
    iconUrl: icono
  });

  const selectedIcon = L.icon({
    iconUrl: iconoSeleccionado
  });

  let selectedMarker = null;
  let markerObject = [];

  const pointToLayer = useCallback(
    (feature, latlng) => {
      const marker = L.marker(latlng, { icon: myIcon });
      marker.on("click", () => {
        if (!isPointClicked) {
          selectedMarker?.setIcon(myIcon);
          marker.setIcon(selectedIcon);
          selectedMarker = marker;
          markerObject = {
            latlng: { lat: selectedMarker.getLatLng().lat, lng: selectedMarker.getLatLng().lng }
          };
          const coords = [markerObject.latlng.lat, markerObject.latlng.lng];
          setCoorTwo(coords);
          handleSelectRecyPoint(feature);
          setIsPointClicked(true);
        }
      });
      return marker;
    },
    [isPointClicked, myIcon]
  );

  return <GeoJSON data={data} pointToLayer={pointToLayer} />;
}

export default JsonLayers;
