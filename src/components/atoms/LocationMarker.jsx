import { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import L from "leaflet";
import { ReactComponent as Icono } from "../../assets/svg/gpsMarker.svg";
import { center } from "../screens/Geoviewer";
import ReactDOMServer from "react-dom/server";
import { OpenStreetMapProvider } from "leaflet-geosearch";

function LocationMarker({ setInputValue, setLatLng }) {
  const map = useMap();
  const [position, setPosition] = useState(center);

  const locateUser = () => {
    map.locate().on("locationfound", function (e) {
      map.flyTo(e.latlng, map.getZoom());
      setPosition([e.latlng.lat, e.latlng.lng]);
      setLatLng(position);

      const provider = new OpenStreetMapProvider();
      provider.search({ query: `${e.latlng.lat},${e.latlng.lng}` }).then((results) => {
        const address = results[0].label;
        setInputValue(address);
      });
    });
  };

  useEffect(locateUser, []);

  const myIcon = L.divIcon({
    html: ReactDOMServer.renderToString(<Icono />),
    iconSize: [25, 25],
    className: ""
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
