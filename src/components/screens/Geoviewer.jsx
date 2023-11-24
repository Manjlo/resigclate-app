import { useState } from "react";
import { TemplateGeo } from "../templates/TemplateGeo";

function Geoviewer() {
  const [selectPoint, setSelectPoint] = useState(false);
  const [selectRecyPoint, setSelectRecyPoint] = useState(false);
  const [recyPointSelected, setRecyPointSelected] = useState(null);
  const [changeIcon, setChangeIcon] = useState(null);

  const handleSelectPoint = () => {
    setSelectPoint(!selectPoint);
  };

  const handleSelectRecyPoint = (point, icon) => {
    setSelectRecyPoint(!selectRecyPoint);
    setRecyPointSelected(point);
    setChangeIcon(icon);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <section className="bg-white w-full h-full sm:w-[99%] sm:h-[98vh] sm:rounded-md [&>TemplateGeo]:sm:rounded-md sm:shadow-md">
        <TemplateGeo
          handleSelectPoint={handleSelectPoint}
          selectPoint={selectPoint}
          selectRecyPoint={selectRecyPoint}
          handleSelectRecyPoint={handleSelectRecyPoint}
          recyPointSelected={recyPointSelected}
        />
      </section>
    </div>
  );
}

export default Geoviewer;
