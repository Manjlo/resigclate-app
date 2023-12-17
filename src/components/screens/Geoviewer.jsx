import { useState } from "react";
import MyMap from "../templates/MapTemplate";
import baseLayers from "../../assets/json/baseLayers.json";
import "leaflet/dist/leaflet.css";

const center = [3.4299852020536488, -76.54119092622952];

function Geoviewer() {
  const [selectPoint, setSelectPoint] = useState(false);
  const [selectRecyPoint, setSelectRecyPoint] = useState(false);
  const [recyPointSelected, setRecyPointSelected] = useState(null);

  const handleSelectPoint = () => {
    setSelectPoint(!selectPoint);
  };

  const handleSelectRecyPoint = (point) => {
    setSelectRecyPoint(!selectRecyPoint);
    setRecyPointSelected(point);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <section className="bg-white w-full h-full sm:w-[99%] sm:h-[98vh] sm:rounded-md [&>TemplateGeo]:sm:rounded-md sm:shadow-md">
        <MyMap
          center={center}
          zoom={13}
          scrollWheelZoom={true}
          baseLayers={baseLayers}
          zoomControl={false}
          handleSelectPoint={handleSelectPoint}
          selectPoint={selectPoint}
          handleSelectRecyPoint={handleSelectRecyPoint}
          selectRecyPoint={selectRecyPoint}
          recyPointSelected={recyPointSelected}
        />
      </section>
    </div>
  );
}

export { Geoviewer, center };
