import { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import L from "leaflet";
import myIconUrl from "../../assets/icons/ongpslocation.png";
import { center } from "../screens/Geoviewer";

function LocationMarker() {
  const map = useMap();
  const [position, setPosition] = useState(center);

  const locateUser = () => {
    map.locate().on("locationfound", function (e) {
      map.flyTo(e.latlng, map.getZoom());
      setPosition([e.latlng.lat, e.latlng.lng]);
    });
  };

  useEffect(locateUser, []);

  const myIcon = L.icon({
    iconUrl: myIconUrl,
    iconSize: [25, 25],
  });

  return (
    <>
      <Marker position={position} icon={myIcon} />
      <button className="flex justify-center items-center" onClick={locateUser}>
        <div className="gps-button h-[25px] w-[25px] relative " />
      </button>
    </>
  );
}

export default LocationMarker;
