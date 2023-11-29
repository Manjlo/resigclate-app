import { useMapEvents } from "react-leaflet";

function ClickHandler({ onMapClick }) {
  useMapEvents({
    click: onMapClick
  });

  return null;
}

export default ClickHandler;
