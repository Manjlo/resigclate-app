// En tu componente Routing
import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

function Routing({ coorOne, coorTwo }) {
  const map = useMap();
  const routingControl = L.Routing.control({
    routeWhileDragging: true
  }).addTo(map);

  useEffect(() => {
    if (!map || !coorOne || !coorTwo) return;

    routingControl.setWaypoints([
      L.latLng(coorOne[0], coorOne[1]),
      L.latLng(coorTwo[0], coorTwo[1])
    ]);

    return () => {
      if (routingControl && routingControl._map) {
        map.removeControl(routingControl);
      }
    };
  }, [map, coorOne, coorTwo]);

  return null;
}

export default Routing;
