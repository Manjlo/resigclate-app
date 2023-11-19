import { useRef, useMemo, useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import { center } from "../templates/TemplateGeo";
import icono from "../../assets/svg/draggableMarkerSvg.svg";
import L from "leaflet";

function DraggableMarker({ setPosition, setAddress }) {
  const markerRef = useRef(null);
  const [lastPosition, setLastPosition] = useState(center);

  useEffect(() => {
    setAddress(lastPosition);
  }, [lastPosition, setAddress]);

  const evenHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const newPosition = marker.getLatLng();
          setLastPosition(newPosition);
        }
      },
    }),
    [setPosition]
  );

  const draggableMarkerIcon = new L.icon({
    iconUrl: icono,
  });

  return (
    <Marker
      draggable={true}
      eventHandlers={evenHandlers}
      position={lastPosition}
      ref={markerRef}
      icon={draggableMarkerIcon}
    >
      <Popup>
        {lastPosition && lastPosition.lat && lastPosition.lng
          ? `Latitud: ${lastPosition.lat.toFixed(
              6
            )}, Longitud: ${lastPosition.lng.toFixed(6)}`
          : "Ubicación no disponible"}
        , Arrastra el icono hacia otra <strong>ubicacion deseada</strong>
      </Popup>
    </Marker>
  );
}

export default DraggableMarker;
