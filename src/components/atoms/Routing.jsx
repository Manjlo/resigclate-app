import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import icono from "../../assets/icons/logo.png";

function Routing({ coorOne, coorTwo }) {
  const map = useMap();

  const customIcon = L.icon({
    iconUrl: icono,
    iconSize: [5, 5],
    className: "custom-icon"
  });

  const routingControl = L.Routing.control({
    routeWhileDragging: true,
    lineOptions: {
      styles: [{ color: "#0074b7", opacity: 0.8, weight: 5 }]
    },
    createMarker: function (i, wp) {
      return L.marker(wp.latLng, { icon: customIcon });
    }
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
