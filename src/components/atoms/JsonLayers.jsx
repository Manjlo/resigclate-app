import { GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";
import icono from "../../assets/svg/recyclingPointsMarker.svg";
import iconoSeleccionado from "../../assets/svg/selectedPoint.svg";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useState } from "react";

function JsonLayers({ data, handleSelectRecyPoint, setRecypointValue }) {
  const myIcon = L.icon({
    iconUrl: icono
  });

  const selectedIcon = L.icon({
    iconUrl: iconoSeleccionado
  });

  let selectedMarker = null;

  const pointToLayer = (feature, latlng) => {
    const marker = L.marker(latlng, { icon: myIcon });
    marker.on("click", () => {
      selectedMarker?.setIcon(myIcon);
      marker.setIcon(selectedIcon);
      selectedMarker = marker;
      handleSelectRecyPoint(feature);
    });
    return marker;
  };

  return <GeoJSON data={data} pointToLayer={pointToLayer} />;
}

export default JsonLayers;
