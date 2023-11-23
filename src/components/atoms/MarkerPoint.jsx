import { useRef, useMemo, useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import { center } from "../templates/TemplateGeo";
import icono from "../../assets/svg/MarkerPointSvg.svg";
import L from "leaflet";

function MarkerPoint({ setAddress }) {
  const markerRef = useRef(null);
  const [lastPosition, setLastPosition] = useState(center);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLastPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    setAddress(lastPosition);
  }, [lastPosition, setAddress]);

  const evenHandlers = useMemo(() => ({
    dragend() {
      const marker = markerRef.current;
      if (marker != null) {
        const newPosition = marker.getLatLng();
        setLastPosition(newPosition);
      }
    },
  }));

  const MarkerIcon = new L.icon({
    iconUrl: icono,
  });

  return lastPosition ? (
    <Marker
      draggable={true}
      eventHandlers={evenHandlers}
      position={lastPosition}
      ref={markerRef}
      icon={MarkerIcon}
    >
      <Popup>
        {lastPosition && lastPosition.lat && lastPosition.lng
          ? `Latitud: ${lastPosition.lat.toFixed(
              6
            )}, Longitud: ${lastPosition.lng.toFixed(6)}`
          : "Ubicación no disponible"}
        , arrastra el personaje hacia otra <strong>ubicacion deseada</strong>
      </Popup>
    </Marker>
  ) : null;
}

export default MarkerPoint;
